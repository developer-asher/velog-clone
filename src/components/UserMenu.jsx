import React from 'react';
import styled from 'styled-components';

const UserMenu = ({ children, ...rest }) => {
  return <Menu {...rest}>{children}</Menu>;
};

const Menu = styled.li`
  padding: 0.75rem 1rem;
  line-height: 1.5;
  font-weight: 500;
  color: rgb(33, 37, 41);
  cursor: pointer;

  &:hover {
    background: rgb(248, 249, 250);
  }
`;

export default UserMenu;
