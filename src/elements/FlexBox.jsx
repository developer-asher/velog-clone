import React from 'react';
import styled from 'styled-components';

const FlexBox = ({ children, ...rest }) => {
  return <Flex {...rest}>{children}</Flex>;
};

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? `${props.direction};` : `row`)};
  justify-content: ${props =>
    props.justify ? `${props.justify};` : `flex-start;`};
  align-items: ${props =>
    props.align_items ? `${props.align_items};` : `center`};
  ${props => (props.margin ? `margin: ${props.margin}` : ``)};
  background-color: ${props => (props.bg_color ? `${props.bg_color};` : ``)};
`;

export default FlexBox;
