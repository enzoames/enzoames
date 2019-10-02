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

  div {
    margin: 60px 0 30px 0;
    font-size: 18px;
  }
`;

function Home() {
  return (
    <HomePage>
      <Intro>
        Hi, I'm Enzo - a photographer turned software engineer based in New York
        City. Currently building beautifully designed web applications at
        Foursquare.
      </Intro>
      <PhotoMe src={ENZ} />
      <AboutMe>
        <div>Life Finds A Way</div>
        <p>
          Lets begin where life began for me, but lets keep it short and simple.
          Life was difficult - I know, pretty cliche but hear me out.
        </p>
        <div>Futbol</div>
        <p>
          I had a dream once as a kid. It was to be the greatest. I have been
          told that I had potential growing up. I never truly believed in myself
          and lacked confidence.
        </p>
        <div>Quotes</div>
        <p>
          I love good quotes. Quotes that I can live by and apply to my daily
          life
        </p>
        <div>Photography</div>
        <p>so much here</p>
        <div>Inspiration</div>
        <p>
          People that have made the most positive impact in my life have come
          after graduating college. I drive my inspiration
        </p>
        <div>Software Engineering</div>
        <p>so much here</p>
      </AboutMe>
    </HomePage>
  );
}

export default Home;
