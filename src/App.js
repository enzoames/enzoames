import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

function App(props) {
  return (
    <React.Fragment>
      <NavBar path={props.location.pathname || "/"} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/photography" component={Photography} exact />
        <Route path="/resume" component={Resume} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  );
}

export default withRouter(App);
