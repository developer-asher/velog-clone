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
  // 로그인
  signUp: userinfo => instance.post('/users/signup', userinfo),
  Login: user => instance.post('/users/auth', user),
  getMyPost: userNickname =>
    instance.get(`users/@${userNickname}`, { headers: authHeader() }),

  // 게시물
  getContentPost: () => instance.get('/posts'),
  detailContentPost: postId =>
    instance.get(`/posts/${postId}`, { headers: authHeader() }),
  addContentPost: postInfo =>
    instance.post('/posts', postInfo, { headers: authHeader() }),
  editContentPost: (postId, postInfo) =>
    instance.patch(`/posts/${postId}`, postInfo, { headers: authHeader() }),
  deleteContentPost: postId =>
    instance.delete(`/posts/${postId}`, { headers: authHeader() }),

  // 댓글
  addCommentPost: (postId, commentData) =>
    instance.post(`/posts/${postId}/comments`, commentData, {
      headers: authHeader(),
    }),
  editCommentPost: (postId, commentId, commentData) =>
    instance.patch(`/posts/${postId}/comments/${commentId}`, commentData, {
      headers: authHeader(),
    }),
  deleteCommentPost: (postId, commentId) =>
    instance.delete(`/posts/${postId}/comments/${commentId}`, {
      headers: authHeader(),
    }),
};

export default apis;
