import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { commentActions } from '../redux/modules/comment';
import Button from '../elements/Button';

const CommentInput = ({ postId, count }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ comment: '' });
  const { comment } = input;

  const handleChange = e => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleClick = e => {
    e.preventDefault();
    dispatch(commentActions.addCommentDB(postId, comment));
    setInput({
      comment: '',
    });
  };

  return (
    <>
      <CmtDiv>
        <h4>{count}개의 댓글</h4>
        <CmtTextarea //
          name='comment'
          value={comment}
          placeholder='댓글을 작성하세요'
          onChange={handleChange}
        />
        <div style={{ margin: '20px 10px 10px 0px', textAlign: 'right' }}>
          <Button
            bd_radius='5px'
            bg_color='#12b886'
            color='#fff'
            ft_size='1.2rem'
            onClick={handleClick}
          >
            댓글 작성
          </Button>
        </div>
      </CmtDiv>
    </>
  );
};

const CmtDiv = styled.div`
  padding: 10px;
`;

const CmtTextarea = styled.textarea`
  width: calc(100% - 10px);
  height: 100px;
  padding: 10px;
  border: 1px solid #eaeaea;
  font-size: 1rem;

  ${propr =>
    propr.placeholder &&
    `
      &::placeholder {
        color: #aaa;
        font-style: italic;
    `}
`;
export default CommentInput;
