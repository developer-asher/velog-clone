import React from 'react';
import styled from 'styled-components';

const Button = ({ children, ...rest }) => {
  return <ButtonEle {...rest}>{children}</ButtonEle>;
};

const ButtonEle = styled.button`
  ${props => (props.width ? `width:${props.width};` : ``)};
  ${props => (props.height ? `height:${props.height};` : ``)};
  border: ${props => (props.bd ? `${props.bd};` : `none;`)};
  border-radius: ${props => (props.bd_radius ? `${props.bd_radius};` : `0;`)};
  padding: ${props => (props.padding ? `${props.padding};` : `5px 15px;`)};
  background-color: ${props =>
    props.bg_color ? `${props.bg_color};` : `transparent;`};
  color: ${props => (props.color ? `${props.color};` : `#333;`)};
  vertical-align: middle;
  font-size: ${props => (props.ft_size ? `${props.ft_size};` : ``)};
  cursor: pointer;
`;

export default Button;
