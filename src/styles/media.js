// Copyright 2019 enzoames Inc. All Rights Reserved.

import { css } from 'styled-components';

export const breakpoints = {
  xxs: 375,
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1600
};

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default media;

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
