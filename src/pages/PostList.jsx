import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { imageActions } from '../redux/modules/image';
import { contentActions } from '../redux/modules/content';
import Post from '../components/Post';

const PostList = props => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.content.list);

  useEffect(() => {
    dispatch(contentActions.getContentDB());
    dispatch(imageActions.uploadImage(''));
  }, []);

  return (
    <>
      <List>
        {posts?.map((item, index) => {
          return <Post key={item.postId} {...item} />;
        })}
      </List>
    </>
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
