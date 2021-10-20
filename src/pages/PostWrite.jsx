import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { imageActions } from '../redux/modules/image';
import PostWriteFt from '../components/PostWriteFt';
import MarkdownRender from '../components/MarkdownRender';
// import Button from '../elements/Button';
import FlexBox from '../elements/FlexBox';
import Input from '../elements/Input';
import TextArea from '../elements/TextArea';
import Divider from '../elements/Divider';
import UploadFile from '../components/UploadFile';

const PostWrite = props => {
  const dispatch = useDispatch();
  const { preview, image_url } = useSelector(state => state.image);
  const [input, setInput] = useState({ title: '', markdown: '' });
  const { title, markdown } = input;

  const handleChange = e => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  useEffect(() => {
    setInput({
      ...input,
      image_url: image_url,
      is_preview: preview ? true : false,
    });
  }, [preview, image_url]);

  return (
    <FlexBox justify='space-between' height='100%'>
      <Markdown>
        <WriteWrap>
          <FlexBox direction='column' align_items='flex-start'>
            <Input //
              name='title'
              value={title}
              type='text'
              onChange={handleChange}
              placeholder='제목을 입력하세요'
              width='100%'
              bd='none'
              ft_size='30px'
              bg_color='transparent'
              outline='none'
            />
            <Divider
              style={{
                height: '5px',
                width: '60px',
                margin: '20px 0 40px 10px',
                backgroundColor: '#333',
              }}
            ></Divider>
            <UploadFile />
          </FlexBox>
          <TextArea
            name='markdown'
            value={markdown}
            onChange={handleChange}
            placeholder='당신의 이야기를 적어보세요...'
            height='calc(100% - 230px)'
            bd='none'
            bg_color='transparent'
            outline='none'
            ft_size='1.2rem'
          ></TextArea>
        </WriteWrap>
        <PostWriteFt post={input} /> {/* write footer */}
      </Markdown>
      <Preview>
        <MarkdownRender>{`# ${title}`}</MarkdownRender>
        <MarkdownRender>
          {preview ? `![](${preview}) \n ${markdown}` : `${markdown}`}
        </MarkdownRender>
      </Preview>
    </FlexBox>
  );
};

const Markdown = styled.div`
  min-height: 100%;
  flex-basis: 48%;
  width: 48%;

  @media all and (max-width: 1024px) {
    flex-basis: 100%;
    width: 100%;
  }
`;
const Preview = styled.div`
  font-size: 1.1rem;
  height: 100%;
  max-height: 100%;
  scroll-y: auto;
  padding: 20px;
  flex-basis: 48%;
  width: 48%;
  background-color: #fff;

  & > h1:first-child {
    margin-bottom: 80px;
  }
  & > blockquote {
    margin-left: 0;
    border-left: 3px solid #69f;
    padding-left: 10px;
    background-color: #f8f9fa;
  }
  & img {
    width: 100%;
  }

  @media all and (max-width: 1024px) {
    display: none;
    flex-basis: 0;
    width: 0;
  }
`;

const WriteWrap = styled.div`
  height: 100vh;
  max-height: 100vh;
`;

// const ButtonWrap = styled.div`
//   margin-bottom: 40px;

//   & > button,
//   & > span {
//     margin-left: 5px;
//     padding: 5px;
//     font-size: 1.1rem;
//   }
//   & > button:first-child {
//     margin-left: 0;
//   }
//   & > span {
//     color: #aaa;
//   }
// `;

{
  /* <ButtonWrap>
<Button>H1</Button>
<Button>H2</Button>
<Button>H3</Button>
<Button>H4</Button>
<span>|</span>
<Button>B</Button>
<Button>I</Button>
<Button>T</Button>
<span>|</span>
<Button>"</Button>
<Button>link</Button>
<Button>file</Button>
<Button>code</Button>
</ButtonWrap> */
}
export default PostWrite;
