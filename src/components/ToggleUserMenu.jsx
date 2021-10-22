import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { contentActions } from '../redux/modules/content';
import { userActions } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import UserMenu from './UserMenu';

const ToggleUserMenu = ({ visible }) => {
  const userNickname = localStorage.getItem('userNickname');
  const dispatch = useDispatch();

  const handleClick = ({ target }) => {
    if (target.classList.contains('post_my')) {
      dispatch(contentActions.getMyContentDB());
      history.push(`/users/@${userNickname}`);
    }
    if (target.classList.contains('post_write')) {
      history.push('/post/write');
    }
    if (target.classList.contains('logout')) {
      dispatch(userActions.logOut());
      history.replace('/');
    }
  };

  if (visible) {
    return (
      <UserMenuList onClick={handleClick}>
        <UserMenu className='post_my'>내 벨로그</UserMenu>
        <UserMenu className='post_write'>새 글 작성</UserMenu>
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
  z-index: 5;
  width: 12rem;
  margin-top: 1rem;
  padding-left: 0;
  list-style: none;
  background: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
`;

export default ToggleUserMenu;
