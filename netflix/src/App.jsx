import React, { Fragment } from "react"
import "./app.css"
import Home from "./pages/home/Home.jsx";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import styled from "styled-components";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const  user  = true; //useContext(AuthContext);
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/register" />}
          </Route>
          <Route  path="/register">
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>
          <Route  path="/login">
            {!user ? <Login /> : <Redirect to="/" />}
          </Route>
          {user && (
           <Fragment>
              <Route  path="/movies">
                <Home type="movies" />
              </Route>
              <Route  path="/series">
                <Home type="series" />
              </Route>
              <Route  path="/watch">
                <Watch />
              </Route>
          </Fragment>  
        )}
        </Switch>
      </Router>
    </Container>

  )
};

const Container = styled.div`
  //height: 100vh;
  overflow: hidden;
  position: relative;
`;

export default App;