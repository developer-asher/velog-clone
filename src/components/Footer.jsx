import React from 'react';
import styled from 'styled-components';

import Divider from '../elements/Divider';

const Footer = props => {
  return (
    <Ft>
      <Desc>
        <FtSubTitle>항해99 클론코딩 6조 - velog</FtSubTitle>
        <Contributor>
          <Front>Contributor. Front: 임동건, 조성민</Front>
          <Divider>|</Divider>
          <Back>Back: 나종완, 허선희, 조윤재</Back>
        </Contributor>
      </Desc>
    </Ft>
  );
};

const Ft = styled.footer`
  position:fixed;
  bottom 0;
  left: 0;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  margin-top: 60px;
  padding: 20px;
  text-align: center;
  background: rgb(248, 249, 250);
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 32px;
`;

const Desc = styled.div`
  display: inline-block;
`;
const FtSubTitle = styled.h2`
  margin-top: 0;
`;

const Contributor = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
`;

const Front = styled.p`
  margin: 5px 0;
`;
const Back = styled.p`
  margin: 5px 0;
`;

export default Footer;
