import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import { imageActions } from '../redux/modules/image';
import Button from '../elements/Button';
import FlexBox from '../elements/FlexBox';

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
      // dispatch(imageActions.setPreview(reader.result));
    };
  };

  const uploadImage = () => {
    if (!imgFile) {
      return false;
    }
    dispatch(imageActions.uploadImageS3(imgFile));
  };

  return (
    <>
      <FlexBox margin='0 0 20px 0'>
        <InputUpload ref={fileRef} type='file' onChange={handleChange} />
        {/* 출간하기 버튼 클릭 시 이와 같이 동작     */}
        <Button
          onClick={uploadImage}
          bd_radius='5px'
          bg_color='#14b885'
          color='#fff'
        >
          이미지업로드
        </Button>
      </FlexBox>
    </>
  );
};

const InputUpload = styled.input``;

export default Upload;
