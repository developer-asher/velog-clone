import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import apis from "../../shared/apis";

// action type
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
// action creator
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
};

//middlewarse

const signupDB = (userinfo) => {
  return async function (dispatch, getState, { history }) {
    apis
      .signUp(userinfo)
      .then((res) => {
        console.log(res);

        window.alert("회원가입이 되었습니다.");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const loginDB = (user) => {
  return async function (dispatch, getState, { history }) {
    apis
      .Login(user)
      .then((res) => {
        const userInfo = res.data;
        dispatch(setUser(userInfo));
      })
      .catch((err) => {
        window.alert("회원정보가 잘못되었습니다.");
      });
  };
};

const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    const tokenCheck = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    
    if (tokenCheck) {
      dispatch(setUser({username:username}));
    }
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        localStorage.setItem("token", action.payload.user.token);
        localStorage.setItem("username", action.payload.user.userNickname);
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

export const userActions = {
  logOut,
  loginDB,
  signupDB,
  loginCheckDB,
};
