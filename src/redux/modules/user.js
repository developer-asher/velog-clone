import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

// action type
const LOGIN = 'LOGIN';

// action creator
const login = createAction(LOGIN, () => ({}));

const initialState = {};

const loginDB = (id, pwd) => {
  return async function (dispatch, getState, { history }) {};
};

export default handleActions(
  {
    [LOGIN]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

export const userActions = {
  loginDB,
};
