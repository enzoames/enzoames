// Copyright 2018 Club Sporta Inc. All Rights Reserved.

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { COLORS } from './constants';

const GlobalStyle = createGlobalStyle`
  ${normalize()}  

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

// LEARN OUR MEDIA QUEIRES

// // Extra small devices (landscape phones, 576px and up)
// @media only screen and (min-width: 330px) { ... }

// // Small devices (landscape phones, 576px and up)
// @media only screen and (min-width: 576px) { ... }

// // Medium devices (tablets, 768px and up)
// @media only screen and (min-width: 768px) { ... }

// // Large devices (desktops, 992px and up)
// @media only screen and (min-width: 992px) { ... }

// // Extra large devices (large desktops, 1200px and up)
// @media only screen and (min-width: 1200px) { ... }
