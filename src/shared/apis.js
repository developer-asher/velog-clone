import axios from 'axios';
import authHeader from './authHeader';

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: 'http://15.164.224.83',
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

const apis = {
  // 게시물 불러오기
  getContentPost: () => instance.get('/posts'),
  addContentPost: post =>
    instance.post('/posts', post, { headers: authHeader() }),
  // deleteContentPost: post_id =>
  //   instance.delete(`/posts/${post_id}`, { headers: authHeader() }),
};

export default apis;
