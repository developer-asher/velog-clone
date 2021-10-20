import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { history } from "../redux/configureStore";
import Button from "../elements/Button";
import FlexBox from "../elements/FlexBox";
import ToggleUserMenu from "./ToggleUserMenu";

import Login from "./Login";
const Header = (props) => {
  const is_login = false;
  const modal = useRef();
  const [toggle, setToggle] = useState(false);

  const moveToMain = () => {
    history.push("/");
  };

  const toggleUserMenu = (e) => {
    setToggle(!toggle);
  };

  const handleClickOutside = ({ target }) => {
    if (modal && !modal.current.contains(target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    if (is_login) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <HeaderWrap>
      <FlexBox justify="space-between">
        <Logo>
          <Button //
            ft_size="1.8rem"
            onClick={moveToMain}
          >
            velog
          </Button>
        </Logo>
        {is_login ? (
          <LoginStBox
            ref={modal}
            className="user_menu"
            onClick={toggleUserMenu}
          >
            <Button
              width="50px"
              height="50px"
              bd_radius="50%"
              bg_color="#0097a7"
              color="#ffffff"
              ft_size="1.3rem"
            >
              S
            </Button>
            <ArrowDropDownIcon sx={{ color: "#777" }} />
            <ToggleUserMenu visible={toggle} />
          </LoginStBox>
        ) : (
          <Login />
        )}
      </FlexBox>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  margin-bottom: 60px;
`;
const Logo = styled.h1``;

const LoginStBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default Header;
