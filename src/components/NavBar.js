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
  background-color: ${COLORS.WHITE};
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  &.active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  &.hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 16px 0 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.md`
    padding: 0 16px;
    flex-direction: row;
    gap: unset;
  `}
`;

const EnzoAmes = styled.h1`
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  display: flex;
  align-items: center;

  ${media.md`
    min-width: fit-content;
  `}
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  padding: 0 0 0 16px;

  ${media.md`
    width: 600px;
    margin: 0 auto;
    padding: 32px;
    gap: 64px;
  `}
`;

const Item = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 16px;
`;

function NavBar(props) {
  const { location } = props;
  const path = location && location.pathname ? location.pathname : '/';

  const show = useOnScroll(true);

  return (
    <Transition className={show ? 'active' : 'hidden'}>
      <Wrapper>
        <EnzoAmes>
          <Link to="/">enzo ames</Link>
        </EnzoAmes>
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
          {/*<Item>
            <Link onClick={() => handleLog(GA_EL.NAV_EVENTS)} to="/events">
              Events
            </Link>
            <BlinkCursor active={path === '/events'} />
          </Item>*/}
        </Nav>
      </Wrapper>
    </Transition>
  );
}

export default withRouter(NavBar);
