import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import styled from 'styled-components';

import PostList from '../pages/PostList';
import PostWrite from '../pages/PostWrite';
import PostDetail from '../pages/PostDetail';
import PostEdit from '../pages/PostEdit';
import { history } from '../redux/configureStore';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <Container>
        {/* <Header /> */}
        <ConnectedRouter history={history}>
          <Route path={['/', '/post']} exact component={PostList} />
          <Route path='/post/detail/:id' exact component={PostDetail} />
          <Route path='/post/write' exact component={PostWrite} />
          <Route path='/post/edit/:id' exact component={PostEdit} />
        </ConnectedRouter>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

const Container = styled.div`
  min-height: 100%;
  height: 100%;
  width: 80%;
  margin: 0 auto;
`;

export default App;
