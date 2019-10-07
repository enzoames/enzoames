// Copyright 2019 enzoames Inc. All Rights Reserved.

import React from 'react';
import styled from 'styled-components';

const ResumePage = styled.div`
  height: fit-content;
  width: 100%;
`;

const Job = styled.div`
  padding-top: 80px;
`;

function Resume() {
  return (
    <ResumePage>
      <Job>Will get to this soon, promise...</Job>
    </ResumePage>
  );
}

export default Resume;
