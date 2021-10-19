import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

//components
import Header from "../components/Header";

//pages
import UserPage from "../pages/UserPage";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path="/mypage" exact component={UserPage} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
