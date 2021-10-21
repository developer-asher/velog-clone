import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

const SET_CONTENT = 'SET_COMMENT';
const ADD_CONTENT = 'ADD_COMMENT';
const DETAIL_CONTENT = 'DETAIL_CONTENT';

const initialState = {
  list: [],
  detail: null,
};

const setContent = createAction(SET_CONTENT, posts => ({ posts }));
const addContent = createAction(ADD_CONTENT, posts => ({ posts }));
const detailContent = createAction(DETAIL_CONTENT, detail => ({ detail }));

const getContentDB = () => {
  return function (dispatch, getState, { history }) {
    console.log('게시글 전체 조회');

    apis
      .getContentPost()
      .then(res => {
        const posts = res.data.posts;

        dispatch(setContent(posts));
      })
      .catch(err => {
        console.error(err);
      });
  };
};

const detailContentDB = id => {
  return function (dispatch, getState, { history }) {
    console.log('게시글 상세 조회');

    apis
      .detailContentPost(parseInt(id))
      .then(res => {
        const data = res.data;

        dispatch(detailContent(data));
      })
      .catch(err => {
        console.error(err);
      });
  };
};

const addContentDB = ({ title, markdown, image_url }) => {
  return function (dispatch, getState, { history }) {
    console.log('게시글 추가, 미들웨어');
    const postInfo = {
      postTitle: title,
      postContent: markdown,
      postImage: image_url,
    };

    console.log(postInfo);

    apis
      .addContentPost(postInfo)
      .then(res => {
        console.log(res);
        // const new_list = res.data;

        // dispatch(addContent(new_list));
        history.replace('/');
      })
      .catch(err => {
        console.error(err);
      });
  };
};

const editContentDB = (postId, post) => {
  return function (dispatch, getState, { history }) {
    console.log('게시글 수정, 미들웨어');
    const postInfo = {
      postTitle: post.title,
      postContent: post.markdown,
      postImage: post.image_url,
    };

    console.log(postId, typeof postId, post);

    apis
      .editContentPost(postId, postInfo)
      .then(res => {
        console.log(res);
        // const new_list = res.data;

        // dispatch(addContent(new_list));
        history.replace('/');
      })
      .catch(err => {
        console.error(err);
      });
  };
};

const deleteContentDB = postId => {
  return function (dispatch, getState, { history }) {
    console.log('게시글 삭제, 미들웨어 postId: ', postId);

    apis
      .deleteContentPost(postId)
      .then(res => {
        console.log(res);
        history.replace('/');
      })
      .catch(err => {
        console.error(err);
      });
  };
};

export default handleActions(
  {
    [SET_CONTENT]: (state, action) =>
      produce(state, draft => {
        draft.list = action.payload.posts;
      }),
    [DETAIL_CONTENT]: (state, action) =>
      produce(state, draft => {
        draft.detail = action.payload.detail;
      }),
  },
  initialState,
);

export const contentActions = {
  getContentDB,
  detailContentDB,
  addContentDB,
  deleteContentDB,
  editContentDB,
};
