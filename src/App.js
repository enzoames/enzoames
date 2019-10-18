// Copyright 2019 enzoames Inc. All Rights Reserved.

import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Resume from './pages/Resume';
import NavBar from './components/NavBar';
import Events from './pages/Events';
import Footer from './components/Footer';
import media from './styles/media';

const Wrapper = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  padding-top: 120px;

  ${media.md`
    padding-top: 80px;
  `}
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
          <Route path="/events" component={Events} exact />
        </Switch>
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
}

export default App;
