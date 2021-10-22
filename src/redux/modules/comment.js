import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

const SET_COMMENT = 'SET_COMMENT';

const initialState = {
  list: [],
};

const setComment = createAction(SET_COMMENT, comments => ({ comments }));

const addCommentDB = (postid, comment) => {
  return function (dispatch, getState, { history }) {
    const postId = parseInt(postid);
    const commentData = {
      commentContent: comment,
    };

    apis
      .addCommentPost(postId, commentData)
      .then(res => {
        const comments = res.data.comments;

        dispatch(setComment(comments));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const deleteCommentDB = (postid, commentid) => {
  return function (dispatch, getState, { history }) {
    const postId = parseInt(postid);
    const commentId = parseInt(commentid);

    apis
      .deleteCommentPost(postId, commentId)
      .then(res => {
        const comments = res.data.comments;

        dispatch(setComment(comments));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const editCommentDB = (postid, commentid, comment) => {
  return function (dispatch, getState, { history }) {
    const postId = parseInt(postid);
    const commentId = parseInt(commentid);
    const commentData = {
      commentContent: comment,
    };

    apis
      .editCommentPost(postId, commentId, commentData)
      .then(res => {
        const comments = res.data.comments;

        dispatch(setComment(comments));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.list = action.payload.comments;
      }),
  },
  initialState,
);

export const commentActions = {
  addCommentDB,
  deleteCommentDB,
  editCommentDB,
};
