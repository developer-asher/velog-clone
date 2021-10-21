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

const PostEdit = props => {
  const id = props.match.params.id;
  const posts = useSelector(state => state.content.list);
  const post = posts.find(item => {
    return item.postId === parseInt(id);
  });

  const { image_url } = useSelector(state => state.image);
  const [input, setInput] = useState({
    title: post?.postTitle,
    markdown: post?.postContent,
    image_url: '',
  });
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
      markdown: image_url
        ? `![Alt text](${image_url})\n ${markdown}`
        : markdown,
      image_url: image_url,
    });
  }, [image_url]);

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
            height='calc(100% - 250px)'
            bd='none'
            bg_color='transparent'
            outline='none'
            ft_size='1.2rem'
          />
        </WriteWrap>
        <PostWriteFt edit='postEdit' postId={id} post={input} />{' '}
        {/* write footer */}
      </Markdown>
      <Preview>
        <MarkdownRender>{`# ${title}`}</MarkdownRender>
        <MarkdownRender>{markdown}</MarkdownRender>
      </Preview>
    </FlexBox>
  );
};

const Markdown = styled.div`
  position: relative;
  min-height: 100%;
  flex-basis: 50%;
  width: 50%;

  @media all and (max-width: 1024px) {
    flex-basis: 100%;
    width: 100%;
  }
`;
const Preview = styled.div`
  font-size: 1.1rem;
  height: 100vh;
  max-height: 100%;
  overflow-y: auto;
  padding: 20px;
  flex-basis: 50%;
  width: 50%;
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
  padding-left: 10px;
`;

export default PostEdit;
