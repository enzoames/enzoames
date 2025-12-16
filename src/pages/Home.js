// Copyright 2019 enzoames Inc. All Rights Reserved.

import React from 'react';
import styled from 'styled-components';
import PROFILE from '../styles/img/profile2025.jpg';
import media from '../styles/media';

const Wrapper = styled.div`
  margin-top: 80px;
`;

const Intro = styled.h1`
  align-items: center;
  display: flex;
  justify-content: center;
  line-height: 26px;
  font-size: 18px;
  padding: 44px 0;
  width: 100%;
  margin: 0;

  ${media.md`
    font-size: 20px;
    line-height: 24px;
    width: 70%;
  `}
`;

const PhotoMe = styled.img`
  width: 100%;
  display: block;
  padding: 0 32px;
  object-fit: contain;
  margin: 0 auto;

  ${media.md`
    height: 500px;
    width: 1000px;
    padding: 0 60px;
  `}
`;

const AboutMe = styled.div`
  margin: 0 auto;
  padding: 30px;
  max-width: 1000px;

  > h2 {
    margin: 24px 0;
    font-size: 18px;
  }

  > p {
    font-size: 16px;
    line-height: 18px;
    margin: 0;
    padding: 0 16px;
  }

  > ul {
    margin: 0;
    padding-left: 16px;
  }

  li {
    line-height: 18px;
    list-style: none;
    margin-bottom: 16px;
  }

  ${media.md`
    padding: 60px;

    > p {
      line-height: 24px;
    }

    li {
      line-height: 32px;
      margin-bottom: 0;
    }

  `}
`;

function Home() {
  return (
    <Wrapper>
      <Intro>
        Hi, I&apos;m Enzo - I&apos;m a software engineer who loves the stock
        market and entrepreneurship.
      </Intro>
      <PhotoMe
        src={PROFILE}
        alt="Enzo Ames photo profile headshot"
        title="Enzo Ames photo profile headshot"
      />
      <AboutMe>
        <h2>Mission Statement</h2>
        <p>
          † To make a lasting positive impact on my family and the world. Christ
          first.
        </p>
        <h2>Software Engineering</h2>
        <p>If I create from the heart, nearly everything works.</p>
        <h2>Stock Trading</h2>
        <p>Process over profits. I'm a disciplined trader.</p>
        <h2>Real Estate</h2>
        <p>The next step on my journey.</p>
        <h2>Sports</h2>
        <p>
          I play Football (Soccer) from time to time and actively train mixed
          martial arts.
        </p>
        <h2>Photography</h2>
        <p>Keeps me creative.</p>
      </AboutMe>
    </Wrapper>
  );
}

export default Home;
