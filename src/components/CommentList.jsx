import React from 'react';
import Comment from './Comment';
import CommentInput from '../components/CommentInput';

const CommentList = ({ postId, commentList }) => {
  return (
    <>
      <CommentInput postId={postId} count={commentList?.length} />
      {commentList?.map((item, index) => {
        return <Comment key={index} {...item} />;
      })}
    </>
  );
};

export default CommentList;
