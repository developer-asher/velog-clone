import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { imageActions } from '../redux/modules/image';
import Button from '../elements/Button';

const Upload = () => {
  const dispatch = useDispatch();
  const fileRef = useRef();
  const [imgFile, setImgFile] = useState();

  const handleChange = e => {
    const reader = new FileReader();
    const file = fileRef.current.files[0];

    setImgFile(file);
    // 파일 내용 읽기
    reader.readAsDataURL(file);
    reader.onload = () => {
      // reader.result : 파일의 컨텐츠(내용물)
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const uploadImage = () => {
    dispatch(imageActions.uploadImageS3(imgFile));
  };

  return (
    <>
      <InputUpload ref={fileRef} type='file' onChange={handleChange} />
      {/* 출근하기 버튼 클릭 시 이와 같이 동작     */}
      <Button bg_color='#ccc' onClick={uploadImage}>
        이미지업로드
      </Button>
    </>
  );
};

const InputUpload = styled.input`
  margin-bottom: 20px;
`;

export default Upload;
