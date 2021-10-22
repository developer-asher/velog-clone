import './App.css';
import { useEffect, useState } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { userActions } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import PostList from '../pages/PostList';
import PostWrite from '../pages/PostWrite';
import PostDetail from '../pages/PostDetail';
import PostEdit from '../pages/PostEdit';
import UserPage from '../pages/UserPage';
import Header from '../components/Header';

function App() {
  const dispatch = useDispatch();
  const { pathname } = useSelector(state => state.router.location);

  useEffect(() => {
    dispatch(userActions.loginCheckDB());
  }, []);

  return (
    <>
      <Container
        visible={
          pathname === '/post/write' || pathname.includes('edit') ? true : false
        }
      >
        <Header />
        <ConnectedRouter history={history}>
          <Route path={['/', '/post']} exact component={PostList} />
          <Route path='/post/detail/:id' exact component={PostDetail} />
          <Route path='/post/write' exact component={PostWrite} />
          <Route path='/post/edit/:id' exact component={PostEdit} />
          <Route path='/users/@:userNickname' exact component={UserPage} />
        </ConnectedRouter>
      </Container>
      {/* {history.location.pathname === '/post/write' ? `` : <Footer />} */}
    </>
  );
}

const Container = styled.div`
  min-height: 100%;
  width: ${props => (props.visible ? `100%;` : `80%;`)};
  margin: 0 auto;
`;

export default App;
