import React, { forwardRef, useEffect } from 'react';
import styled from 'styled-components';

const TextArea = forwardRef((props, ref) => {
  const { ...rest } = props;

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, [ref]);

  return (
    <TextAreaEle
      {...rest}
      ref={ref}
      onFocus={e =>
        e.currentTarget.setSelectionRange(
          e.currentTarget.value.length,
          e.currentTarget.value.length,
        )
      }
    ></TextAreaEle>
  );
});

const TextAreaEle = styled.textarea`
  width: 100%;
  ${props => (props.height ? `height: ${props.height};` : ``)};
  ${props => (props.margin ? `margin: ${props.margin};` : ``)};
  ${props => (props.bd ? `border: ${props.bd};` : ``)};
  ${props => (props.padding ? `padding:10px;` : ``)};
  font-size: ${props => (props.ft_size ? `${props.ft_size};` : `14px`)};
  background-color: ${props =>
    props.bg_color ? `${props.bg_color};` : `#fff`};
  outline: ${props => (props.outline ? `${props.outline};` : ``)};

  ${propr =>
    propr.placeholder &&
    `
      &::placeholder {
        color: #aaa;
        font-style: italic;
    `}
`;

export default TextArea;
