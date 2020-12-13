// Copyright 2019 enzoames Inc. All Rights Reserved.

import React, { useEffect } from 'react';
import styled from 'styled-components';
import ENZ from '../styles/img/ENZ_1250.jpg';
import media from '../styles/media';
import { GA_URL } from '../utils/config';
import Analytics from '../utils/Analytics';

const Intro = styled.h1`
  align-items: center;
  display: flex;
  justify-content: center;
  line-height: 26px;
  font-size: 18px;
  padding: 60px 30px;
  width: 100%;
  margin: 0;

  ${media.md`
    font-size: 24px;
    line-height: 36px;
    padding: 60px 30px 100px 120px;
    width: 50%;
  `}
`;

const PhotoMe = styled.img`
  width: 100%;
  height: 400px;
  display: block;
  padding: 0 30px;
  object-fit: cover;
  margin: 0 auto;

  ${media.md`
    width: 1000px;
    padding: 0 60px;
  `}
`;

const AboutMe = styled.div`
  margin: 0 auto;
  padding: 30px;
  max-width: 1000px;

  > h2 {
    margin: 30px 0;
    font-size: 18px;
  }

  > p {
    font-size: 16px;
    line-height: 20px;
    padding: 0 15px;
  }

  > ul {
    margin: 0;
  }

  li {
    line-height: 20px;
    list-style: none;
    margin-bottom: 15px;
  }

  ${media.md`
    padding: 60px;

    > p {
      line-height: 25px;
    }

    li {
      line-height: 45px;
      margin-bottom: 0;
    }

  `}
`;

function Home() {
  useEffect(() => {
    Analytics.logPageImpression(GA_URL.HOME);
  }, []);

  return (
    <>
      <Intro>
        Hi, I&apos;m Enzo - a photographer turned software engineer based in New York City.
        Currently building beautifully designed web applications at Foursquare.
      </Intro>
      <PhotoMe
        src={ENZ}
        alt="Enzo Ames photo profile headshot"
        title="Enzo Ames photo profile headshot"
      />
      <AboutMe>
        <h2>Life Finds A Way</h2>
        <p>
          Let&apos;s begin where life began for me - born and raised in Lima, Peru. After 11 short
          years, I moved to New York City. Each day I grew a thicker skin and made my way through
          the public education system. Now, I see sunshine and work as a software engineer.
        </p>
        <h2>Fútbol</h2>
        <p>I love the sport. Simple.</p>
        <h2>Quotes</h2>
        <p>I love good quotes. Here are some I like, love, and live by.</p>
        <ul>
          <li>
            <i>Who are you when no one is watching?</i>
          </li>
          <li>
            <i>Experience is the name we give to our mistakes</i>
          </li>
          <li>
            <i>
              You are an average of the five people you most spend your time with, choose wisely
            </i>
          </li>
          <li>
            <i>Teach me how to be harder than life and kinder than love</i>
          </li>
          <li>
            <i>Management is doing things right. Leadership is doing the right thing</i>
          </li>
          <li>
            <i>There is no courage without the presence of fear</i>
          </li>
        </ul>
        <h2>Photography</h2>
        <p>
          I love photography - good looking people, beautiful landscapes, fruits on a table, motion,
          and street.
        </p>
        <h2>Inspiration</h2>
        <p>
          My inspiration is primarily driven from books and the people around me - my family, a
          handful of close friends, and the incredible collegues at the places that I have worked.
          Thank you all.
        </p>
        <h2>Software Engineering</h2>
        <p>
          A career inspired by my brother who worked as a software engineer at IBM in Peru. Gracias.
        </p>
      </AboutMe>
    </>
  );
}

export default Home;
