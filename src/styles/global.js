// Copyright 2019 enzoames Inc. All Rights Reserved.

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { COLORS } from './constants';

const GlobalStyle = createGlobalStyle`
  ${normalize()}  
  
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  * {
    box-sizing: border-box;
  }

  #root{
    height: 100%;
  }

  html, body, #appContainer {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Montserrat";
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: ${COLORS.BLACK};

    &:hover {
      text-decoration: none;
      color: inherit;
    }
    &:focus{
      outline: 0;
    }
  }

  button:focus{
    outline: 0;
  }

  input[type=text] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export default GlobalStyle;
