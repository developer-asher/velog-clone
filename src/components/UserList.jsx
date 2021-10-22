import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const UserList = (props) => {
  const { postId, postImage, id, postTitle, postIntro, postTime, commentCnt } =
    props;

  const handleClick = () => {
    history.push(`/post/detail/${postId}`);
  };

  return (
    <React.Fragment>
      <Wrap>
        <Side>
          <UserListWrap>
            <FirstPostWrap onClick={handleClick}>
              <a href="">
                <PostImagePreview background={postImage} />
              </a>
              <a href="" style={{ textDecoration: "none" }}>
                <PostTitle>{postTitle}</PostTitle>
              </a>
              <PostTextPreview>{postIntro}</PostTextPreview>
              {/* <PostHashtagWrap>
                <a href="#" style={{ textDecoration: "none" }}>
                  <PostTag>Project</PostTag>
                </a>
                <a href="#" style={{ textDecoration: "none" }}>
                  <PostTag>Fighting!</PostTag>
                </a>
                <a href="#" style={{ textDecoration: "none" }}>
                  <PostTag>clone</PostTag>
                </a>
                <a href="#" style={{ textDecoration: "none" }}>
                  <PostTag>database</PostTag>
                </a>
              </PostHashtagWrap> */}
              <CommentInfoWrap>
                <span>{postTime}</span>
                <CommentPointfont></CommentPointfont>
                <span>{commentCnt}</span>
              </CommentInfoWrap>
            </FirstPostWrap>
          </UserListWrap>
          <DivLine />
        </Side>
      </Wrap>
    </React.Fragment>
  );
};

export default UserList;

const DivLine = styled.div`
  background: rgb(233, 236, 239);
  width: 100%;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  box-sizing: inherit;
  display: block;
`;

const Wrap = styled.div`
  padding-bottom: 4rem;
  box-sizing: inherit;
  display: block;
`;

const Side = styled.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: inherit;
  display: block;
`;

const UserListWrap = styled.div`
  box-sizing: inherit;
  display: block;
`;

const FirstPostWrap = styled.div`
  padding-top: 0px;
  padding-bottom: 4rem;
  line-height: 1.5;
  box-sizing: inherit;
  display: block;
`;

const PostImagePreview = styled.div`
  padding-top: 52.356%;
  margin-bottom: 1rem;
  width: 100%;
  position: relative;
  box-sizing: inherit;
  display: block;
  background-size: cover;
  // background: url("https://zonerantivirus.com/wp-content/uploads/default-image.png");
  background: ${(props) =>
    props.background
      ? `url("${props.background}");`
      : `url("https://zonerantivirus.com/wp-content/uploads/default-image.png")`};
`;

const PostTitle = styled.p`
  font-size: 1.5rem;
  margin: 0px;
  color: rgb(33, 37, 41);
  word-break: keep-all;
  box-sizing: inherit;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const PostTextPreview = styled.div`
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  font-size: 1rem;
  color: rgb(73, 80, 87);
  word-break: keep-all;
  overflow-wrap: break-word;
  box-sizing: inherit;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1.5;
  max-height: 4.4em;
  overflow: hidden;
`;

const PostHashtagWrap = styled.div`
  margin-bottom: -0.875rem;
  box-sizing: inherit;
  display: block;
  line-height: 1.5;
`;

const PostTag = styled.div`
  margin-bottom: 0.875rem;
  background: rgb(241, 243, 245);
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  border-radius: 1rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 0.875rem;
  color: rgb(12, 166, 120);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  box-sizing: inherit;
  line-height: 1.5;
`;

const CommentInfoWrap = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 1rem;
  color: rgb(134, 142, 150);
  font-size: 0.875rem;
  box-sizing: inherit;
  line-height: 1.5;
`;

const CommentPointfont = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  box-sizing: inherit;
  display: block;
`;
