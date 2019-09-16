import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  width: 100%;
  height: 100%;
`;

function NavBar() {
  return (
    <Nav>
      <div>
        Photography
      </div>
      <div>
        Resume
      </div>
      <div>
        About
      </div>
      <div>Contact
      </div>
    </Nav>
  );
}

export default NavBar;
