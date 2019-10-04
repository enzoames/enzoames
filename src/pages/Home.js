import React from "react";
import styled from "styled-components";
import ENZ from "../styles/img/ENZ_4262-1.jpg";

const HomePage = styled.div`
  height: fit-content;
  width: 100%;
`;

const Intro = styled.div`
  align-items: center;
  display: flex;
  font-size: 24px;
  height: 500px;
  justify-content: center;
  letter-spacing: 1px;
  line-height: 36px;
  padding: 40px 30px 0 120px;
  width: 50%;
`;

const PhotoMe = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const AboutMe = styled.div`
  margin: 0 auto;
  padding: 60px;
  width: 1000px;
  letter-spacing: 1px;

  > div {
    margin: 60px 0 30px 0;
    font-size: 18px;
  }

  > p {
    line-height: 25px;
    padding: 0 15px;
    box-sizing: border-box;
  }
`;

function Home() {
  return (
    <HomePage>
      <Intro>
        Hi, I&apos;m Enzo - a photographer turned software engineer based in New
        York City. Currently building beautifully designed web applications at
        Foursquare.
      </Intro>
      <PhotoMe src={ENZ} />
      <AboutMe>
        <div>Life Finds A Way</div>
        <p>
          Let&apos;s begin where life began for me -- born and raised in Lima,
          Peru. After 11 short years, I began my life in New York City. Each day
          I grew thicker skin and made my way through the public education
          system. And then there was college, where life was drained out of me
          through homework. A thousand and one school nights later I graduated.
          Now, I see sunshine and work as a software engineer.
        </p>
        <div>Futbol</div>
        <p>I love the the sport. Simple.</p>
        <div>Quotes</div>
        <p>I love good quotes. Here are some I like, love, and live to.</p>
        <p>Who are you when no one is watching?</p>
        <p>Experience is the name we give to our mistakes</p>
        <p>A system cannot fail those it was never designed to protect</p>
        <p>
          You are an average of the five people you most spend your time with,
          choose wisely
        </p>
        <p>Teach me how to be harder than life and kinder than love</p>
        <p>
          Management is doing things right. Leadership is doing the right things
        </p>
        <p>Your future self is talking sh*t about you</p>
        <p>Why does Socrates never cries and Jesus never laughs</p>
        <p>There is no courage without the precense of fear</p>
        <p>Let&apos;s make man kind</p>
        <p></p>
        <div>Photography</div>
        <p>
          I love Photography -- good looking people, beautiful landscapes,
          fruits on a table, motion, and street.
        </p>
        <div>Inspiration</div>
        <p>
          My inspiration is driven from books, but primarily from the people
          around me. I wouldn&apos;t be where I am today if it wasn&apos;t for
          the people that have granted a helping hand to pull me forward. From
          my family and handful of close friends, to the incredible collegues at
          the places that I have worked. Thank you to you all.
        </p>
        <div>Software Engineering</div>
        <p>
          That&apos;s what I do now. Inspired by my brother who worked as a
          software engineer at IBM in Peru. Gracias.
        </p>
      </AboutMe>
    </HomePage>
  );
}

export default Home;
