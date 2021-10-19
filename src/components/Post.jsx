import React from 'react';
import styled from 'styled-components';
import FlexBox from '../elements/FlexBox';
import { history } from '../redux/configureStore';

const Post = ({
  id,
  postTitle,
  postContent,
  postImage,
  postTime,
  userNickname,
}) => {
  //
  const handleClick = () => {
    history.push(`/post/detail/${id}`);
  };

  return (
    <Item onClick={handleClick}>
      <img src={postImage} alt='' />
      <div className='desc'>
        <h2 className='title'>{postTitle}</h2>
        <p className='content'>{postContent}</p>
        <p>
          <span className='date'>{postTime}</span>
          <span className='divider'>∙</span>
          <span className='cnt_comment'>6개의 댓글</span>
        </p>
      </div>
      <FlexBox style={{ borderTop: '1px solid #eee', padding: '15px' }}>
        <div className='flexbox profile'>
          <img
            className='profile_img'
            src='http://via.placeholder.com/25x25'
            alt='임시'
          />
          <span className='profile_nickName'>by {userNickname}</span>
        </div>
        {/* <span className='like'>🧡 64</span> */}
      </FlexBox>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 23%;
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
    margin: 20px 2%;
  }
`;

export default Post;
