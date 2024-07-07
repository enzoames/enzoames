// Copyright 2019 enzoames Inc. All Rights Reserved.

import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Resume from './pages/Resume';
import NavBar from './components/NavBar';
// import Events from './pages/Events/Events';
import Footer from './components/Footer';

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
      <Wrapper>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/photography" component={Photography} exact />
          <Route path="/resume" component={Resume} exact />
          {/*<Route path="/events" component={Events} exact />*/}
        </Switch>
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
}

export default App;
