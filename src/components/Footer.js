// Copyright 2019 enzoames Inc. All Rights Reserved.

import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/constants';
import github from '../styles/img/github.png';
import instagram from '../styles/img/instagram.png';
import linkedin from '../styles/img/linkedin.png';
import media from '../styles/media';

const Wrap = styled.div`
  align-items: center;
  background-color: ${COLORS.GREY1};
  border-top: 1px solid ${COLORS.GREY2};
  color: ${COLORS.GREY3};
  display: flex;
  font-size: 14px;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;

  > div:first-child {
    margin-bottom: 40px;
  }

  ${media.sm`
    flex-direction: inherit;
  `}
`;

const Section = styled.div`
  display: inline-block;
  position: relative;
  width: 60%;

  > div {
    font-weight: bold;
    margin-bottom: 30px;
  }

  > span {
    margin-top: 30px;
    font-size: 12px;
    display: block;
  }

  > a {
    margin-right: 20px;
  }

  ${media.sm`
    width: 250px;
  `}
`;

const Icon = styled.img`
  height: 15px;
  width: 15px;
`;

function Footer() {
  return (
    <Wrap>
      <Section>
        <div>social</div>
        <a href="https://www.instagram.com/enzoames/">
          <Icon src={instagram} />
        </a>
        <a href="https://linkedin.com/in/enzoames/">
          <Icon src={linkedin} />
        </a>
        <a href="https://github.com/enzoames">
          <Icon src={github} />
        </a>
      </Section>
      <Section>
        <div>lets work together</div>
        <p>eamespizarro@gmail.com</p>
        <span>© 2019 Enzo Ames</span>
      </Section>
    </Wrap>
  );
}

export default Footer;
