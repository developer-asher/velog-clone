import React from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import FlexBox from '../elements/FlexBox';
import Button from '../elements/Button';
import { useDispatch } from 'react-redux';

import { history } from '../redux/configureStore';
import { contentActions } from '../redux/modules/content';

const PostWriteFt = ({ post, ...rest }) => {
  const dispatch = useDispatch();

  const goBack = () => {
    history.replace('/');
  };

  // preview는 있는데 image_url이 없으면 출간 안되도록
  const postContent = () => {
    if (post.is_preview && post.image_url === '') {
      alert('이미지를 업로드해주세요!');
      return false;
    }

    dispatch(contentActions.setContentDB(post));
  };

  return (
    <OuterFt>
      <InnerFt>
        <FlexBox padding='5px 10px' onClick={goBack}>
          <ArrowBackIcon />
          나가기
        </FlexBox>
        <Button
          onClick={postContent}
          padding='10px 20px'
          bd_radius='5px'
          bg_color='#14b885'
          color='#fff'
          ft_size='1.2rem'
        >
          출간하기
        </Button>
      </InnerFt>
    </OuterFt>
  );
};

const OuterFt = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  padding: 15px 20px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  background-color: #f8f9fa;
`;
const InnerFt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  // flexbox
  & > div {
    cursor: pointer;
    font-size: 1.2rem;
  }
`;
const ButtonWrap = styled.div`
  & > button:first-child {
    margin-right: 10px;
  }
`;

export default PostWriteFt;
