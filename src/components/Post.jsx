import React from 'react';
import styled from 'styled-components';

import { history } from '../redux/configureStore';
import FlexBox from '../elements/FlexBox';
import Image from '../elements/Image';

const Post = ({
  postId,
  postTitle,
  postContent,
  postImage,
  postTime,
  userNickname,
}) => {
  //
  const handleClick = () => {
    history.push(`/post/detail/${postId}`);
  };

  return (
    <Item onClick={handleClick}>
      {postImage ? <Image max_height='200px' src={postImage} alt='' /> : <></>}
      <Desc className='desc'>
        <Title className='title'>{postTitle}</Title>
        <Content className='content'>{postContent}</Content>
      </Desc>
      <PostBottom>
        <DateCmt>
          <span className='date'>{postTime}</span>
          <span className='divider'>∙</span>
          <span className='cnt_comment'>6개의 댓글</span>
        </DateCmt>
        <FlexBox
          style={{
            borderTop: '1px solid #eee',
            padding: '15px',
          }}
        >
          <FlexBox>
            <Image
              circle
              className='profile_img'
              alt='임시'
              style={{ marginRight: '5px' }}
            />
            <span className='profile_nickName'>by {userNickname}</span>
          </FlexBox>
          {/* <span className='like'>🧡 64</span> */}
        </FlexBox>
      </PostBottom>
    </Item>
  );
};

const Content = styled.div`
  margin-top: 10px;
`;

const DateCmt = styled.p`
  padding: 0 15px;
`;

const PostBottom = styled.div`
  // position: relative;
  // left: 0;
  // bottom: 0;
  // width: 100%;
`;

const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 23%;
  justify-content: space-between;
  width: 23%;
  min-height: 400px;
  margin: 20px 1%;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgb(0 0 0 / 8%) 0px 12px 20px 0px;
  }

  & > div.desc {
    padding: 15px;
  }

  @media screen and (max-width: 1024px) {
    flex-basis: 46%;
    width: 46%;
    margin: 20px 2%;
  }
`;

const Desc = styled.div`
  min-height: 200px;
  max-height: 200px;
`;
const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
`;

export default Post;
