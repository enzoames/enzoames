// Copyright 2019 enzoames Inc. All Rights Reserved.

import styled, { keyframes } from 'styled-components';
import { COLORS } from '../styles/constants';
import media from '../styles/media';

const blinkAnimation = keyframes`
  50% {
    opacity: 0;
  }
`;

const BlinkCursor = styled.span`
  animation: ${blinkAnimation} 1s step-start infinite;
  background-color: ${COLORS.BLACK};
  bottom: 10px;
  display: ${props => (props.active ? 'inline-block' : 'none')};
  height: 1px;
  position: absolute;
  width: 10px;

  ${media.md`
    bottom: 3px;
  `}
`;

export default BlinkCursor;
