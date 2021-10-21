import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import styled from "styled-components";

import PostList from "../pages/PostList";
// import PostWrite from '../pages/PostWrite';
import PostDetail from "../pages/PostDetail";
import PostEdit from "../pages/PostEdit";
import { history } from "../redux/configureStore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserPage from "../pages/UserPage";
import { userActions } from "../redux/modules/user";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.loginCheckDB());
  }, []);

  return (
    <>
      <Container>
        <Header />
        <ConnectedRouter history={history}>
          <Route path={["/", "/post"]} exact component={PostList} />
          <Route path="/post/detail/:id" exact component={PostDetail} />
          {/* <Route path='/post/write' exact component={PostWrite} /> */}
          <Route path="/post/edit/:id" exact component={PostEdit} />
          <Route path="/users/@:userNickname" exact component={UserPage} />
          
        </ConnectedRouter>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default App;
