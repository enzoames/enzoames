import React from 'react';
import styled from 'styled-components';

const PhotographyPage = styled.div`
  height: fit-content;
  width: 100%;
`;

const Album = styled.div`
  padding-top: 80px;
`;

function Photography() {
  return (
    <PhotographyPage>
      <Album>Oh its coming soon, trust me...</Album>
    </PhotographyPage>
  );
}

export default Photography;
