import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

const GET_COMMENT = 'GET_COMMENT';

const initialState = {};

const getComment = createAction(GET_COMMENT, () => ({}));

const getCommentDB = post_id => {
  return function (dispatch, getState, { history }) {};
};

export default handleActions(
  {
    [GET_COMMENT]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

export const commentActions = {
  getCommentDB,
};
