import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config();
import apis from '../../shared/apis';

// aws s3 통신하는 부분
AWS.config.update({
  region: 'ap-northeast-2',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.REACT_APP_AWS_POOL_ID,
  }),
});

const SET_PREVIEW = 'SET_PREVIEW';
const UPLOAD_IMAGE = 'UPLOAD_IMAGE';

const initialState = {
  preview: null,
  image_url: '',
  file: null,
};

const setPreview = createAction(SET_PREVIEW, preview => ({
  preview,
}));
const uploadImage = createAction(UPLOAD_IMAGE, image_url => ({
  image_url,
}));

const uploadImageS3 = file => {
  return function (dispatch, getState, { history }) {
    console.log(file.name);

    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: 'velog-clone', // 업로드할 대상 버킷명
        Key: file.name, // 업로드할 파일명 (* 확장자를 추가해야 합니다!)
        Body: file, // 업로드할 파일 객체
      },
    });

    const promise = upload.promise();

    promise
      .then(data => {
        const image_url = data.Location;
        console.log('이미지 업로드에 성공했습니다.');

        // 서버에 image_url 포함 데이터 전송.
        dispatch(uploadImage(image_url));
      })
      .catch(err => {
        console.log('오류가 발생했습니다: ', err.message);
      });
  };
};

export default handleActions(
  {
    [SET_PREVIEW]: (state, action) =>
      produce(state, draft => {
        draft.preview = action.payload.preview;
      }),
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, draft => {
        draft.image_url = action.payload.image_url;
      }),
  },
  initialState,
);

export const imageActions = {
  setPreview,
  uploadImageS3,
};
