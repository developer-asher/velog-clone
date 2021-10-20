import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

const SET_CONTENT = 'SET_COMMENT';
const ADD_CONTENT = 'ADD_COMMENT';

const initialState = {
  list: [],
};

const setContent = createAction(SET_CONTENT, posts => ({ posts }));
const addContent = createAction(ADD_CONTENT, () => ({}));

const getContentDB = () => {
  return function (dispatch, getState, { history }) {
    console.log('게시글 전체 조회');

    apis
      .getContentPost()
      .then(res => {
        console.log(res);
        const posts = res.data.posts;

        dispatch(setContent(posts));
      })
      .catch(err => {
        console.error(err);
      });
  };
};

const addContentDB = post => {
  return function (dispatch, getState, { history }) {
    console.log('게시글 전체 조회', post);

    apis
      .addContentPost(post)
      .then(res => {
        console.log(res);
        // const new_list = res.data;

        // dispatch(addContent(new_list));
        // history.replace('/');
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
  },
  initialState,
);

export const contentActions = {
  getContentDB,
  addContentDB,
};
