import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

const GET_CONTENT = 'GET_COMMENT';

const initialState = {};

const getContent = createAction(GET_CONTENT, () => ({}));

const getContentDB = post_id => {
  return function (dispatch, getState, { history }) {};
};

export default handleActions(
  {
    [GET_CONTENT]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

export const commentActions = {
  getContentDB,
};
