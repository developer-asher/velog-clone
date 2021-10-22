import React from 'react';
import Comment from './Comment';
import { useSelector } from 'react-redux';

import CommentInput from '../components/CommentInput';

const CommentList = ({ postId, commentList }) => {
  const comments = useSelector(state => state.comment.list);

  return (
    <>
      <CommentInput postId={postId} count={commentList?.length} />
      {comments?.length === 0 || !comments
        ? commentList?.map((item, index) => {
            return <Comment key={index} postId={postId} {...item} />;
          })
        : comments?.map((item, index) => {
            return <Comment key={index} postId={postId} {...item} />;
          })}
    </>
  );
};

export default CommentList;
