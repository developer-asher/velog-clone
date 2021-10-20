import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';
import { contentActions } from '../redux/modules/content';

const PostList = props => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.content.list);

  useEffect(() => {
    dispatch(contentActions.getContentDB());
  }, []);

  return (
    <>
      <Header />
      <List>
        {posts.map((item, index) => {
          return <Post key={item.postId} {...item} />;
        })}
      </List>
      <Footer />
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
