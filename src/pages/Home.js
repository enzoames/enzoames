// Copyright 2019 enzoames Inc. All Rights Reserved.

import React from 'react';
import styled from 'styled-components';
import ENZ from '../styles/img/ENZ_4262-1.jpg';
import media from '../styles/media';

const Intro = styled.h1`
  align-items: center;
  display: flex;
  justify-content: center;
  letter-spacing: 1px;
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
  object-fit: cover;

  ${media.md`
    margin-bottom: 30px;
  `}
`;

const AboutMe = styled.div`
  margin: 0 auto;
  padding: 30px;
  max-width: 1000px;
  letter-spacing: 1px;

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
  return (
    <>
      <Intro>
        Hi, I&apos;m Enzo - a photographer turned software engineer based in New York City. Currently building
        beautifully designed web applications at Foursquare.
      </Intro>
      <PhotoMe src={ENZ} />
      <AboutMe>
        <h2>Life Finds A Way</h2>
        <p>
          Let&apos;s begin where life began for me -- born and raised in Lima, Peru. After 11 short years, I moved to
          New York City. Each day I grew thicker skin and made my way through the public education system. And then
          there was college, where life was drained out of me through homework. A thousand and one school nights later I
          graduated. Now, I see sunshine and work as a software engineer.
        </p>
        <h2>Futbol</h2>
        <p>I love the the sport. Simple.</p>
        <h2>Quotes</h2>
        <p>I love good quotes. Here are some I like, love, and live to.</p>
        <ul>
          <li>Who are you when no one is watching?</li>
          <li>Experience is the name we give to our mistakes</li>
          <li>A system cannot fail those it was never designed to protect</li>
          <li>You are an average of the five people you most spend your time with, choose wisely</li>
          <li>Teach me how to be harder than life and kinder than love</li>
          <li>Management is doing things right. Leadership is doing the right things</li>
          <li>Your future self is talking sh*t about you</li>
          <li>Why does Socrates never cries and Jesus never laughs</li>
          <li>There is no courage without the precense of fear</li>
          <li>Let&apos;s make man kind</li>
        </ul>
        <h2>Photography</h2>
        <p>I love Photography -- good looking people, beautiful landscapes, fruits on a table, motion, and street.</p>
        <h2>Inspiration</h2>
        <p>
          My inspiration is driven from books, but primarily from the people around me. I wouldn&apos;t be where I am
          today if it wasn&apos;t for the people that have granted a helping hand to pull me forward. From my family and
          handful of close friends, to the incredible collegues at the places that I have worked. Thank you to you all.
        </p>
        <h2>Software Engineering</h2>
        <p>
          That&apos;s what I do now. Inspired by my brother who worked as a software engineer at IBM in Peru. Gracias.
        </p>
      </AboutMe>
    </>
  );
}

export default Home;
