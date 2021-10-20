import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../shared/apis";
//action
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const initialState = {
  commentList: [],
};
//actionCreator
const getComment = createAction(GET_COMMENT, () => ({}));
const addComment = createAction(ADD_COMMENT, (comment) => ({
  comment,
}));
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({
  commentId,
}));

//middlewarse
const getCommentDB = (post_id) => {
  return function (dispatch, getState, { history }) {};
};
//reducer
export default handleActions(
  {
    [GET_COMMENT]: (state, action) => produce(state, (draft) => {}),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.commentList.unshift(action.payload.comment);
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.commentList.unshift(action.payload.comment);
      }),
    [DELETE_COMMENT]: (state, action) => produce(state, (draft) => {
      const new_list = draft.commentList.filter((each) => {
        return each.commentId !== action.payload.commentId;
      })
      draft.commentList = new_list;
    }),
  },
  initialState
);

export const commentActions = {
  addComment,
  deleteComment,
  getCommentDB,
};
