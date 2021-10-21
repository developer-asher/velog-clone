import React from 'react';
import styled from 'styled-components';

import { history } from '../redux/configureStore';
import UserMenu from './UserMenu';

import { userActions } from '../redux/modules/user';
import { useDispatch } from 'react-redux';

const ToggleUserMenu = ({ visible }) => {
  const dispatch = useDispatch();
  const handleClick = ({ target }) => {
    if (target.classList.contains('post_my')) {
      history.push("/userpage")
      // 유제 페이지로 이동
    }
    if (target.classList.contains('post_write')) {
      history.push('/post/write');
    }
    if (target.classList.contains('logout')) {
      dispatch(userActions.logOut())
      history.replace("/")
      // 로그아웃
    }
  };

  if (visible) {
    return (
      <UserMenuList onClick={handleClick}>
        <UserMenu className='post_my'>내 벨로그</UserMenu>
        <UserMenu className='post_write'>새 글 작성</UserMenu>
        {/* <UserMenu className='setting'>설정</UserMenu> */}
        <UserMenu className='logout'>로그아웃</UserMenu>
      </UserMenuList>
    );
  }
  return <></>;
};

const UserMenuList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0px;
  width: 12rem;
  margin-top: 1rem;
  padding-left: 0;
  list-style: none;
  background: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
`;

export default ToggleUserMenu;
