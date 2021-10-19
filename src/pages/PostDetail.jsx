import React from 'react';
import styled from 'styled-components';

import Button from '../elements/Button';
import Divider from '../elements/Divider';
import FlexBox from '../elements/FlexBox';
import Image from '../elements/Image';

const PostDetail = ({ id }) => {
  console.log(id);

  const editPost = () => {
    console.log('게시글 수정');
  };
  const deletePost = () => {
    console.log('게시글 삭제');
  };

  return (
    <FlexBox justify='space-between'>
      <Section>
        <Head className='head'>
          <Title>2021 백엔드 개발자 로두맵11111</Title>
          <ButtonWrap className='btn_list'>
            <Button ft_size='1.1rem' onClick={editPost}>
              수정
            </Button>
            <Button ft_size='1.1rem' onClick={deletePost}>
              삭제
            </Button>
          </ButtonWrap>

          <FlexBox margin='10px 0 60px 0'>
            <VelogName className='nickname'>nick name</VelogName>
            <Divider>∙</Divider>
            <Date className='post_date'>2021년 10월 9일</Date>
          </FlexBox>
        </Head>

        <ContentWrap className='content'>
          <Image src='http://via.placeholder.com/100x30' alt='임시' />
          <Content>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            inventore esse at aut sit tenetur consequuntur itaque ea reiciendis
            ipsa excepturi quo laborum, modi omnis reprehenderit magnam.
            Aliquid, recusandae quis!
          </Content>
        </ContentWrap>

        <Profile className='flexbox profile'>
          <Image src='http://via.placeholder.com/100x100' alt='임시' />
          <ProfileInfo>
            <ProfileName>nick name</ProfileName>
            <ProfileDesc>간단한 자기소개</ProfileDesc>
          </ProfileInfo>
        </Profile>
        {/* comment input compo */}
        {/* comment list compo */}
      </Section>
      <Aside>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        inventore esse at aut sit tenetur consequuntur itaque ea reiciendis ipsa
        excepturi quo laborum, modi omnis reprehenderit magnam. Aliquid,
        recusandae quis!
      </Aside>
    </FlexBox>
  );
};

const Section = styled.section`
  flex-basis: 70%;
`;
const Aside = styled.aside`
  flex-basis: 25%;
  padding-left: 1%;
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
  font-size: 1.3rem;
  font-weight: bold;
`;
const Date = styled.span`
  font-size: 1rem;
  color: #777;
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.p`
  margin: 40px 0;
  font-size: 1.1rem;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
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
