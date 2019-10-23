// Copyright 2019 enzoames Inc. All Rights Reserved.

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { GA_URL } from '../utils/config';
import Analytics from '../utils/Analytics';

const ResumePage = styled.div`
  height: fit-content;
  width: 100%;
`;

const Job = styled.div`
  padding-top: 80px;
`;

function Resume() {
  useEffect(() => {
    Analytics.logPageView(GA_URL.RESUME);
  }, []);

  return (
    <ResumePage>
      <Job>Will get to this soon, promise...</Job>
    </ResumePage>
  );
}

export default Resume;
