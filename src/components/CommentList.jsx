import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
//components
import Comment from "./Comment";

const CommentList = (props) => {
  const commentliist = useSelector((state) => state.comment.commentList);
  const { postId } = props
  
    return (
        <React.Fragment>
            {commentliist.map((c,index)=>{
                return <Comment key={index} commentId={c.commentId} {...c}/>
            })}
        </React.Fragment>
    );
}

export default CommentList;