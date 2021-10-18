import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

const SET_IMAGE = 'SET_PREVIEW';

const initialState = {};

const setImage = createAction(SET_IMAGE, () => ({}));

export default handleActions(
  {
    [SET_IMAGE]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

export const imageActions = {
  setImage,
};
