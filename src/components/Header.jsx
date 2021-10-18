import React from 'react';
import styled from 'styled-components';

import Button from '../elements/Button';
import FlexBox from '../elements/FlexBox';

const Header = props => {
  return (
    <HeaderWrap>
      <FlexBox //
        bg_color='#ccc'
        justify='space-between'
      >
        <Logo>
          <Button //
            bd='none'
            ft_size='1.8rem'
          >
            velog
          </Button>
        </Logo>
        <Button
          bd_radius='30px'
          bg_color='#343a3f'
          color='#ffffff'
          ft_size='17px'
        >
          로그인
        </Button>
      </FlexBox>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  margin-bottom: 60px;
`;
const Logo = styled.h1``;

export default Header;
