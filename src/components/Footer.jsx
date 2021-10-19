import React from 'react';
import styled from 'styled-components';
const Footer = props => {
  return (
    <Ft>
      <Desc>
        <FtSubTitle>항해99 클론코딩 6조 - velog</FtSubTitle>
        <Contributor>
          <Front>프론트 - 임동건, 조성민</Front>
          <Back>백엔드 - 나종완, 허선희, 조윤재</Back>
        </Contributor>
      </Desc>
    </Ft>
  );
};

const Ft = styled.footer`
  margin-top: 60px;
  padding: 20px;
  background-color: #14b88520;
  text-align: center;
`;

const Desc = styled.div`
  display: inline-block;
`;
const FtSubTitle = styled.h2``;

const Contributor = styled.div`
  text-align: left;
`;

const Front = styled.p`
  margin: 5px 0;
`;
const Back = styled.p`
  margin: 5px 0;
`;

export default Footer;
