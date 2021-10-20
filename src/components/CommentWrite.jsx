import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { commentActions } from "../redux/modules/comment";
const CommentInput = (props) => {
  const dispatch = useDispatch();
  const commentliist = useSelector((state) => state.comment.commentList);
  const postId = props.postId;

  const [comment, setComment] = React.useState("");
  const changeComment = (e) => {
    setComment(e.target.value);
  };

  const addComment = () => {
    dispatch(commentActions.addComment({content:comment,postId:postId}));
  };

  return (
    <React.Fragment>
      <CmtDiv>
        <h4>{commentliist.length}개의 댓글</h4>
        <CmtTextarea
          placeholder="댓글을 작성하세요"
          onChange={changeComment}
          value={comment}
        ></CmtTextarea>
        <div style={{ margin: "20px 10px 10px 0px" }}>
          <CmtButton onClick={addComment}>댓글 작성</CmtButton>
        </div>
      </CmtDiv>
    </React.Fragment>
  );
};

const CmtDiv = styled.div`
  padding: 10px;
`;

const CmtTextarea = styled.textarea`
  width: calc(100% - 10px);
  height: 90px;
  border: 1px solid #eaeaea;
  font-size: 14pt;
  font-weight: bold;
`;

// const CmtTextarea::placeholder = styled.textarea`
//     color: #D5D5D5;
// `;

const CmtButton = styled.button`
  width: 120px;
  height: 33px;
  background-color: #12b886;
  color: #fff;
  padding: 0px 15px;
  box-size: border-box;
  font-size: 19px;
  font-weight: 600;
  text-align: center;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
`;

export default CommentInput;
