import React from "react";
import styled from "styled-components";
//elements
import Button from "../elements/Button";
import FlexBox from "../elements/FlexBox";
//components
import Login from "./Login";
import { getCookie, deleteCookie } from "../shared/Cookie";

const Header = (props) => {
  
  const is_login = localStorage.getItem("token")

  
  if (is_login) {
    return (
      <HeaderWrap>
        <FlexBox bg_color="#ccc" justify="space-between">
          <Logo>
            <Button bd="none" ft_size="1.8rem">
              velog
            </Button>
          </Logo>

          <Button
            bd_radius="30px"
            bg_color="#ffffff"
            color="#343a40"
            ft_size="17px"
          >
            새 글 작성
          </Button>
        </FlexBox>
      </HeaderWrap>
    );
  }
  return (
    <HeaderWrap>
      <FlexBox //
        bg_color="#ccc"
        justify="space-between"
      >
        <Logo>
          <Button //
            bd="none"
            ft_size="1.8rem"
          >
            velog
          </Button>
        </Logo>

        <Login />
      </FlexBox>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  margin-bottom: 60px;
`;
const Logo = styled.h1``;

export default Header;
