import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import Resume from "./pages/Resume";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  max-width: 2000px;
  margin: 0 auto;
`;

function App(props) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar path={props.location.pathname || "/"} />
      <Wrapper>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/photography" component={Photography} exact />
          <Route path="/resume" component={Resume} exact />
        </Switch>
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
}

export default withRouter(App);
