import React from 'react';
import styled from 'styled-components';

const Divider = ({ children, ...rest }) => {
  return <Item {...rest}>{children}</Item>;
};

const Item = styled.span`
  margin: ${props => (props.margin ? `props.margin` : `0 10px`)};
`;

export default Divider;
