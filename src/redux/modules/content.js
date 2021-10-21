import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../shared/apis";

//actiontype
const GET_CONTENT = "GET_CONTENT";
const GET_MYCONTENT = "GET_MYCONTENT";

const initialState = {
  mycontent: null,
};

//actionCreator
const getContent = createAction(GET_CONTENT, () => ({}));
const getMyContent = createAction(GET_MYCONTENT, (mycontent) => ({
  mycontent,
}));

//middlewarse
const getContentDB = (post_id) => {
  return function (dispatch, getState, { history }) {};
};

const getMyContentDB = (userId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getMyPost(userId)
      .then((res) => {
        console.log(res.data);
        const myContent = res.data;
        dispatch(getMyContent(myContent));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//reducer
export default handleActions(
  {
    [GET_CONTENT]: (state, action) => produce(state, (draft) => {}),
    [GET_MYCONTENT]: (state, action) =>
      produce(state, (draft) => {
        draft.mycontent = action.payload.mycontent;
      }),
  },
  initialState
);

export const contentActions = {
  getContentDB,
  getMyContentDB,
};
