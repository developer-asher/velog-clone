import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

const SET_COMMENT = 'SET_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const initialState = {
  list: [],
};

const setComment = createAction(SET_COMMENT, comments => ({ comments }));
const deleteComment = createAction(DELETE_COMMENT, commentData => ({
  commentData,
}));
const editComment = createAction(EDIT_COMMENT, commentData => ({
  commentData,
}));

const addCommentDB = (postid, comment) => {
  return function (dispatch, getState, { history }) {
    console.log('댓글 추가', postid, comment);

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
    console.log('댓글 삭제');
    console.log(postid, typeof postid);
    console.log(commentid, typeof commentid);

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
    console.log('댓글 삭제');
    console.log(postid, typeof postid);
    console.log(commentid, typeof commentid);

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
