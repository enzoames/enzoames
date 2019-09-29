import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

function NavBar({ path }) {
  return (
    <Wrap>
      <EnzoAmes>ENZO AMES</EnzoAmes>
      <Nav>
        <Item>
          <Link to="/">Home</Link>
          <Cursor active={path === "/"} />
        </Item>
        <Item>
          <Link to="/photography">Photography</Link>
          <Cursor active={path === "/photography"} />
        </Item>
        <Item>
          <Link to="/resume">Resume</Link>
          <Cursor active={path === "/resume"} />
        </Item>
        <Item>
          <Link to="/about">About</Link>
          <Cursor active={path === "/about"} />
        </Item>
        <Item>
          <Link to="/contact">Contact</Link>
          <Cursor active={path === "/contact"} />
        </Item>
      </Nav>
    </Wrap>
  );
}

NavBar.propTypes = {
  path: PropTypes.string.isRequired
};

NavBar.defaultProps = {
  path: "/"
};

export default NavBar;
