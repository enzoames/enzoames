import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { COLORS } from "../styles/constants";

const Wrap = styled.div`
  background-color: ${COLORS.WHITE};
  display: flex;
  position: fixed;
  width: 100%;
`;

const EnzoAmes = styled.div`
  font-size: 18px;
  letter-spacing: 2px;
  padding: 30px 120px;
  text-transform: uppercase;
  width: 400px;
`;

const Nav = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 30px;
  width: 800px;
`;

const Item = styled.div`
  font-size: 14px;
  position: relative;
  text-align: center;
  width: 160px;
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
  display: ${props => (props.active ? "inline-block" : "none")};
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
