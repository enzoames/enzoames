// Copyright 2019 enzoames Inc. All Rights Reserved.

import React from 'react';
import styled from 'styled-components';
import media from '../styles/media';

const PhotographyPage = styled.div`
  width: 100%;
  display: flex;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${media.md`
    display: block;
    padding: 30px;
    width: 200px;
  `}
`;

const Album = styled.div`
  font-size: 14px;
  position: relative;
  text-align: center;
  width: 50%;
  padding: 10px;

  ${media.md`
    padding: 0;
    margin-bottom: 15px;
  `}
`;

function Photography() {
  return (
    <PhotographyPage>
      <List>
        <Album>Nyc</Album>
        <Album>World</Album>
        <Album>Portrait</Album>
      </List>
    </PhotographyPage>
  );
}

export default Photography;
