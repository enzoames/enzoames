// Copyright 2019 enzoames Inc. All Rights Reserved.

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { COLORS } from '../styles/constants';
import media from '../styles/media';

const Wrap = styled.div`
  background-color: ${COLORS.WHITE};
  width: 100%;
  position: fixed;

  ${media.md`
    display: flex;
  `}
`;

const EnzoAmes = styled.h1`
  font-size: 18px;
  letter-spacing: 2px;
  padding: 15px;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  width: 100%;

  ${media.md`
    padding: 30px 0;  
    width: 400px;
  `}
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${media.md`
    margin: 0 auto;
    padding: 30px;
    width: 800px;
  `}
`;

const NAV_ITEMS = 4;

const Item = styled.div`
  font-size: 14px;
  position: relative;
  text-align: center;
  width: 50%;
  padding: 10px;

  ${media.md`
    padding: 0;
    width: calc(100% / ${NAV_ITEMS});
  `}
`;

const blinkAnimation = keyframes`
  50% {
    opacity: 0;
  }
`;

const Cursor = styled.span`
  animation: ${blinkAnimation} 1s step-start infinite;
  background-color: ${COLORS.BLACK};
  bottom: 3px;
  display: ${props => (props.active ? 'inline-block' : 'none')};
  height: 1px;
  position: absolute;
  width: 10px;
`;

function NavBar({ path }) {
  return (
    <Wrap>
      <EnzoAmes>enzo ames</EnzoAmes>
      <Nav>
        <Item>
          <Link to="/">Home</Link>
          <Cursor active={path === '/'} />
        </Item>
        <Item>
          <Link to="/photography">Photography</Link>
          <Cursor active={path === '/photography'} />
        </Item>
        <Item>
          <Link to="/resume">Resume</Link>
          <Cursor active={path === '/resume'} />
        </Item>
        <Item>
          <Link to="/rsvp">RSVP</Link>
          <Cursor active={path === '/rsvp'} />
        </Item>
      </Nav>
    </Wrap>
  );
}

NavBar.propTypes = {
  path: PropTypes.string.isRequired
};

NavBar.defaultProps = {
  path: '/'
};

export default NavBar;
