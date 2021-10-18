import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import apis from "../../shared/apis";

// action type
const LOGIN = "LOGIN";

// action creator
const login = createAction(LOGIN, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
};

//middlewarse
const loginDB = (id, pwd) => {
  return async function (dispatch, getState, { history }) {};
};

export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
  },
  initialState
);

export const userActions = {
  login,
  loginDB,
};
