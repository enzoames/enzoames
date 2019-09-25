import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  width: 800px;
  padding: 30px;
  display: flex;
  margin: 0 auto;
`;

const Item = styled.div`
  width: 160px;
  text-align: center;
  font-size: 14px;
  position: relative;
`;

const EnzoAmes = styled.div`
  width: 400px;
  padding: 30px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 2px;
`;

const Wrap = styled.div`
  display: flex;
  width: 100%;
`;

const blinkAnimation = keyframes`
  50% {
    opacity: 0;
  }
`;

const Cursor = styled.span`
  height: 1px;
  background-color: black;
  width: 10px;
  position: absolute;
  bottom: 3px;
  display: ${props => (props.active ? "inline-block" : "none")};
  animation: ${blinkAnimation} 1s step-start infinite;
`;

function NavBar() {
  return (
    <Wrap>
      <EnzoAmes>ENZO AMES</EnzoAmes>
      <Nav>
        <Item>
          <Link to="/">Home</Link>
          <Cursor active />
        </Item>
        <Item>
          <Link to="/photography">Photography</Link>
          <Cursor />
        </Item>
        <Item>
          <Link to="/resume">Resume</Link>
          <Cursor />
        </Item>
        <Item>
          <Link to="/about">About</Link>
          <Cursor />
        </Item>
        <Item>
          <Link to="/contact">Contact</Link>
          <Cursor />
        </Item>
      </Nav>
    </Wrap>
  );
}

export default NavBar;
