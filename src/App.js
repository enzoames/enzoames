import React from "react";
import { Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route path="/" component={Home} exact />
      <Route path="/photography" component={Photography} exact />
      <Route path="/resume" component={Resume} exact />
      <Route path="/about" component={About} exact />
      <Route path="/contact" component={Contact} exact />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
