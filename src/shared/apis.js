import axios from 'axios';
import authHeader from './authHeader';

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  // baseURL: 'http://localhost:4000/',
  baseURL: 'http://15.164.224.83',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

const apis = {
  // baseURL을 미리 지정해줬기 때문에 함수의 첫 번째 인자에 들어가는 url은
  // http://localhost:4000/ + 내가 작성한 url
  // 즉, 예시로들자면 getPost함수에서는 instance.get('http://localhost:4000/posts')로 요청을 보내게 됩니다.
  // get과 delete의 경우 두 번째 인자에 데이터를 담아 보낼수 없기 때문에 서버에 데이터를 보낼경우 쿼리를 이용하여 보내주도록 합니다.

  // 게시물 불러오기
  // {headers: authHeader()}
  getPost: () => instance.get('/posts'),
  signUp: (userinfo) => instance.post("/users/signup",userinfo),
  Login: (user) => instance.post("/users/auth",user)
  
  
};

export default apis;
