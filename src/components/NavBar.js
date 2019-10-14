// Copyright 2019 enzoames Inc. All Rights Reserved.

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { COLORS } from '../styles/constants';
import media from '../styles/media';
import BlinkCursor from '../components/BlinkCursor';
import useOnScroll from '../hooks/useOnScroll';

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;

const Wrap = styled.div`
  background-color: ${COLORS.WHITE};
  width: 100%;
  position: fixed;
  top: 0;

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

function NavBar(props) {
  const { location } = props;
  const path = location && location.pathname ? location.pathname : '/';

  const show = useOnScroll(true);

  return (
    <Transition>
      <Wrap className={show ? 'active' : 'hidden'}>
        <EnzoAmes>enzo ames</EnzoAmes>
        <Nav>
          <Item>
            <Link to="/">Home</Link>
            <BlinkCursor active={path === '/'} />
          </Item>
          <Item>
            <Link to="/photography">Photography</Link>
            <BlinkCursor active={path === '/photography'} />
          </Item>
          <Item>
            <Link to="/resume">Resume</Link>
            <BlinkCursor active={path === '/resume'} />
          </Item>
          <Item>
            <Link to="/rsvp">RSVP</Link>
            <BlinkCursor active={path === '/rsvp'} />
          </Item>
        </Nav>
      </Wrap>
    </Transition>
  );
}

export default withRouter(NavBar);
