import React from 'react';
import styled from 'styled-components';

const Input = ({ ...rest }) => {
  return <InputEle {...rest} />;
};

const InputEle = styled.input`
  ${props => (props.width ? `width: ${props.width};` : ``)};
  ${props => (props.margin ? `margin: ${props.margin};` : ``)};
  ${props => (props.bd ? `border: ${props.bd};` : ``)};
  padding: ${props => (props.padding ? `${props.padding};` : `15px 5px`)};
  font-size: ${props => (props.ft_size ? `${props.ft_size};` : `14px`)};
  outline: ${props => (props.outline ? `${props.outline};` : ``)};
  color: ${props => (props.color ? `${props.color};` : `#333`)};
  background-color: ${props =>
    props.bg_color ? `${props.bg_color};` : `#fff`};

  ${propr =>
    propr.placeholder &&
    `&::placeholder {
    color: #aaa;`}
`;

export default Input;
