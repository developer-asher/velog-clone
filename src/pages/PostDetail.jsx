import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { history } from "../redux/configureStore";
import { contentActions } from "../redux/modules/content";
import CommentList from "../components/CommentList";
import MarkdownRender from "../components/MarkdownRender";
import Button from "../elements/Button";
import Divider from "../elements/Divider";
import FlexBox from "../elements/FlexBox";
import Image from "../elements/Image";

const PostDetail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const detail = useSelector((state) => state.content.detail);
  const is_login = useSelector((state) => state.user.is_login);
  const post = detail?.post;
  const comments = detail?.comments;

  const editPost = () => {
    console.log("게시글 수정");
    history.push(`/post/edit/${id}`);
  };

  const deletePost = () => {
    dispatch(contentActions.deleteContentDB(id));
  };

  useEffect(() => {
    dispatch(contentActions.detailContentDB(id));
  }, []);

  return (
    <>
      <FlexBox justify="space-between">
        <Section>
          <Head className="head">
            <Title>{post?.postTitle}</Title>

            {post?.postUserNickname == localStorage.getItem("userNickname") ? (
              <ButtonWrap className="btn_list">
                <Button ft_size="1.1rem" onClick={editPost}>
                  수정
                </Button>
                <Button ft_size="1.1rem" onClick={deletePost}>
                  삭제
                </Button>
              </ButtonWrap>
            ) : (
              <></>
            )}

            <FlexBox margin="10px 0 0 0">
              <VelogName className="nickname">
                {post?.postUserNickname}
              </VelogName>
              <Divider>∙</Divider>
              <Date className="post_date">{post?.postTime}</Date>
            </FlexBox>
          </Head>

          <ContentWrap className="content">
            {/* {post?.postImage ? (
              <Image src={post?.postImage} alt='임시' />
            ) : (
              <></>
            )} */}
            <Content>
              <MarkdownRender>{post?.postContent}</MarkdownRender>
              {/* markdown parsing */}
            </Content>
          </ContentWrap>

          <Profile className="flexbox profile">
            <Image width="100px" height="100px" circle alt="임시" />
            <ProfileInfo>
              <ProfileName>{post?.postUserNickname}</ProfileName>
              <ProfileDesc></ProfileDesc>
            </ProfileInfo>
          </Profile>
        </Section>
        {/* <Aside>{post?.postTitle}</Aside> */}
      </FlexBox>
      <CommentList postId={id} commentList={comments} />
    </>
  );
};

const Section = styled.section`
  flex-basis: 72%;
`;
const Aside = styled.aside`
  flex-basis: 25%;
  padding-left: 2%;
  border-left: 1px solid #ccc;
`;
const Head = styled.div``;
const Title = styled.h2`
  font-size: 2.5rem;
`;
const ButtonWrap = styled.div`
  text-align: right;
  & > button {
    border: none;
    padding: 0;
  }
  & > button:first-child {
    margin-right: 5px;
  }
`;

const VelogName = styled.span`
  font-size: 1.2rem;
`;
const Date = styled.span`
  font-size: 1rem;
  color: #777;
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  font-size: 1.1rem;

  & img {
    display: block;
    margin: 3rem auto;
    max-width: 100%;
  }
  & > blockquote {
    margin-left: 0;
    margin-right: 0;
    border-left: 3px solid #14b885;
    padding-left: 10px;
  }
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;
const ProfileInfo = styled.div`
  margin-left: 20px;
`;
const ProfileName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;
const ProfileDesc = styled.p``;

export default PostDetail;
