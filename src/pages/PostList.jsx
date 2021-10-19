import React from 'react';
import styled from 'styled-components';

import Post from '../components/Post';

const PostList = props => {
  const list = [
    {
      id: 1,
      postTitle: '2021 백엔드 개발자 로두맵11111',
      postContent: '백엔드 게발자 로드맵11',
      postImage: 'http://via.placeholder.com/100x50',
      postTime: '2일 전',
      userNickname: 'smcho',
    },
    {
      id: 2,
      postTitle: '2021 백엔드 개발자 로두맵22222',
      postContent: '백엔드 게발자 로드맵22',
      postImage: 'http://via.placeholder.com/100x50',
      postTime: '2일 전',
      userNickname: 'smcho',
    },
    {
      id: 3,
      postTitle: '2021 백엔드 개발자 로두맵33333',
      postContent: '백엔드 게발자 로드맵33',
      postImage: 'http://via.placeholder.com/100x50',
      postTime: '2일 전',
      userNickname: 'smcho',
    },
    {
      id: 4,
      postTitle: '2021 백엔드 개발자 로두맵44444',
      postContent: '백엔드 게발자 로드맵44',
      postImage: 'http://via.placeholder.com/100x50',
      postTime: '2일 전',
      userNickname: 'smcho',
    },
  ];

  return (
    <List>
      {list.map((item, index) => {
        return <Post key={index} {...item} />;
      })}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

export default PostList;
