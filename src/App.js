import React from 'react';
import GlobalStyle from './styles/global';
import { Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <Route path="/" component={Home} />
      <GlobalStyle/>
    </React.Fragment>
  );
}

export default App;
