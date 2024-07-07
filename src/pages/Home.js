// Copyright 2019 enzoames Inc. All Rights Reserved.

import React, { useEffect } from 'react';
import styled from 'styled-components';
import ENZ from '../styles/img/profile24.png';
import media from '../styles/media';
import { GA_URL } from '../utils/config';
import Analytics from '../utils/Analytics';

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
    font-size: 24px;
    line-height: 36px;
    width: 50%;
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
  useEffect(() => {
    Analytics.logPageImpression(GA_URL.HOME);
  }, []);

  return (
    <Wrapper>
      <Intro>
        Hi, I&apos;m Enzo - day trader, software engineer, and entrepreneur.
      </Intro>
      <PhotoMe
        src={ENZ}
        alt="Enzo Ames photo profile headshot"
        title="Enzo Ames photo profile headshot"
      />
      <AboutMe>
        <h2>Mission Statement</h2>
        <ul>
          <li>
            <i>Never compromise with honesty</i>
          </li>
          <li>
            <i>Take accountability</i>
          </li>
          <li>
            <i>Provide clear expectations</i>
          </li>
          <li>
            <i>No one owes you anything</i>
          </li>
          <li>
            <i>Show respect</i>
          </li>
          <li>
            <i>Listen twice as much as you speak</i>
          </li>
          <li>
            <i>There is only one truth and it&apos;s objective</i>
          </li>
          <li>
            <i>Maintain mental clarity during difficult times</i>
          </li>
          <li>
            <i>Your room is a reflection of your mind</i>
          </li>
          <li>
            <i>Growth requires ignorance</i>
          </li>
          <li>
            <i>
              Management is doing things right. Leadership is doing the right
              thing
            </i>
          </li>
          <li>
            <i>There is no courage without the presence of fear</i>
          </li>
          <li>
            <i>Be a mentor</i>
          </li>
          <li>
            <i>Be in complete control of your breathing</i>
          </li>
          <li>
            <i>Never compromise with health</i>
          </li>
          <li>
            <i>Remain in great physical shape</i>
          </li>
          <li>
            <i>
              It&apos;s better to be a warrior in a garden than a gardener at
              war
            </i>
          </li>
          <li>
            <i>Pessimists sound smart but optimists make money</i>
          </li>
          <li>
            <i>Create wealth</i>
          </li>
          <li>
            <i>Make money work for you</i>
          </li>
          <li>
            <i>Maintain financial freedom</i>
          </li>
          <li>
            <i>Time together as a family is a gift</i>
          </li>
          <li>
            <i>Remain brave and young for the years to come</i>
          </li>
          <li>
            <i>Christ is King</i>
          </li>
        </ul>
        <h2>Inspiration</h2>
        <p>
          My inspiration is primarily driven from books and the people around me
          - my family, a handful of close friends and incredible collegues.
          Thank you all.
        </p>
        <h2>Stock Trading</h2>
        <p>Process over profits. I'm a disciplined trader.</p>
        <h2>Software Engineering</h2>
        <p>If I create from the heart, nearly everything works.</p>
        <h2>Real Estate</h2>
        <p>The next step on my journey.</p>
        <h2>Mix Martial Arts</h2>
        <p>
          A harmless man is not a good man. A good man is a very dangerous man
          who has it under voluntary control.
        </p>
        <h2>Fútbol</h2>
        <p>I love the sport. Simple.</p>
        <h2>Photography</h2>
        <p>
          All born creative but grow out of it. Photography keeps me creative.
        </p>
      </AboutMe>
    </Wrapper>
  );
}

export default Home;
