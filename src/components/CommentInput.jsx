import React from "react";
import styled from "styled-components";

const CommentInput = () => {
  
    return (
        <React.Fragment>
            <CmtDiv>
                <h4>5개의 댓글</h4>
                <CmtTextarea placeholder="댓글을 작성하세요"></CmtTextarea>
                <div style={{margin:"20px 10px 10px 0px"}}><CmtButton>댓글 작성</CmtButton></div>
            </CmtDiv>
        </React.Fragment>
    );
}

const CmtDiv = styled.div`
    padding: 10px;
`;

const CmtTextarea = styled.textarea`
    width: calc(100% - 10px);
    height: 90px;
    border: 1px solid #EAEAEA;
    font-size: 14pt;
    font-weight: bold;
`;

// const CmtTextarea::placeholder = styled.textarea`
//     color: #D5D5D5;
// `;

const CmtButton = styled.button`
    width: 120px;
    height: 33px;
    background-color: #12B886;
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