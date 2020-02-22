// Copyright 2019 enzoames Inc. All Rights Reserved.

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GA_URL, GA_CAT, GA_EL } from '../utils/config';
import Analytics from '../utils/Analytics';
import media from '../styles/media';

const ResumePage = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px;

  ${media.md`
    padding: 60px;
  `}
`;

const Section = styled.div`
  > h3 {
    border-bottom: 1px solid #000;
  }
  > ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      margin-bottom: 8px;
    }
  }
  > p span {
    font-size: 14px;
  }

  .readMore {
    cursor: pointer;
  }
`;

function Resume() {
  const [readMore, setReadMore] = useState(false);
  useEffect(() => {
    Analytics.logPageImpression(GA_URL.RESUME);
  }, []);

  const handleReadMore = () => {
    Analytics.logClickReadMore(GA_CAT.RESUME, GA_EL.READ_MORE);
    setReadMore(true);
  };

  return (
    <ResumePage>
      <Section>
        <h3>Education</h3>
        <p>The City College of New York, CUNY, NYC</p>
        <p>BS, Computer Science, Grove School of Engineering, GPA: 3.4</p>
        <p>June 2018</p>
      </Section>
      <Section>
        <h3>Qualifications</h3>
        <p>
          <strong>Technical Skills:</strong> Javascript, React, Redux, Styled Components, HTML, CSS, Python, Node.js,
          Gatsby, Webpack, AWS (S3, APIGateway, Lambda, DynamoDB, SNS), Django REST Framework, Git Flow, PySpark,
          Express.js, Flutter, Dart, Scrapy Framework.
        </p>
        <p>
          <strong>Design Software Tools:</strong> Sketch, Figma, and Adobe Lightroom.
        </p>
        <p>
          <strong>Spoken Languages:</strong> Fluent in English and Spanish.
        </p>
      </Section>
      <Section>
        <h3>Work Experience</h3>
        <p>
          <i>
            <strong>Software Engineer</strong>
          </i>
          , <u>Foursquare</u>, NYC <span>| Oct 2019 - Present</span>
        </p>
        <ul>
          <li>Developing and innovating consumer and client facing interfaces across Foursquare's products.</li>
          <li>Having a great time.</li>
        </ul>
        <p>
          <i>
            <strong>Software Developer</strong>
          </i>
          , <u>Club Sporta</u>, NYC <span>| Jan 2018 - Jul 2019</span>
        </p>
        <ul>
          <li>
            Managed and working in a team of four to develop Club Sporta’s MVP. Taking the project from a landing page
            to a full-fledge web app in an agile manner.
          </li>
          <li>
            Used Sketch to design the application’s interface and software development tools such a Trello - to assign
            tasks and manage sprints effectively.
          </li>
          <li>Managed development and deployment to an AWS EC2 instance.</li>
        </ul>
        {!readMore && (
          <p onClick={handleReadMore}>
            <strong className="readMore">click here to get to really know me...</strong>
          </p>
        )}
        {readMore && (
          <>
            <p>
              <i>
                <strong>Student Software Developer</strong>
              </i>
              , <u>CUNY Tech Prep</u>, NYC <span>| Sept 2017 - June 2018</span>
            </p>
            <ul>
              <li>
                Selected to competitive full stack JavaScript training program that prepares students for careers in
                software engineering.
              </li>
            </ul>
            <ul>
              <li>
                Learn in-demand technologies like React, Node + Express and processes for design, implementation,
                testing, and deployment.
              </li>
            </ul>
            <p>
              <i>
                <strong>Software Developer Intern</strong>
              </i>
              , <u>Alpine Capital Advisors</u>, NYC <span>| Feb 2017 - Aug 2017</span>
            </p>
            <ul>
              <li>
                Worked in a team of three to create and design a web app that provides investment opportunities to
                Chinese or foreign investors.
              </li>
            </ul>
            <ul>
              <li>
                Contributed to the web scraping team by developing spiders that navigate through different websites to
                extract articles and market data.
              </li>
              <li>Front end stack consisted of React & Redux and back end Django Rest, Mongo, and Redis.</li>
            </ul>
            <p>
              <i>
                <strong>Computer Science Tutor</strong>
              </i>
              , <u>SEEK PAL Tutoring Center</u>, NYC <span>| Sept 2016 - Jan 2017</span>
            </p>
            <ul>
              <li>
                Introduced caseload of 12-15 freshmen and sophomore students to the fundamental concepts of computer
                science and evaluated student progress over the semester.
              </li>
            </ul>
            <p>
              <i>
                <strong>Sports Photographer</strong>
              </i>
              , <u>CCNY Athletics Department</u>, NYC <span>| Sept 2015 - May 2016</span>
            </p>
            <ul>
              <li>
                Photographed student athletes as they compete in CUNY conference matches. Final edited images were
                presented to the Assistant Athletics Coordinator Director at CCNY for website use.
              </li>
            </ul>
            <p>
              <i>
                <strong>Freelance Photographer</strong>
              </i>
              , <u>enzoames.com</u>, NYC <span>| Jan 2015 - Present</span>
            </p>
            <ul>
              <li>
                My love for photography and art, led me to become a freelance photographer. I shoot portraits, still,
                sports, and landscape photography till this day and I'm available upon request. It's a profession I keep
                very close.
              </li>
            </ul>
            <p>
              <i>
                <strong>Bartender, Bar Back, Server, Food Runner</strong>
              </i>
              , <u>Pure Food and Wine</u>, NYC <span>| Aug 2014 - June 2015</span>
            </p>
            <ul>
              <li>
                Presented, explained menu, and informed patrons of daily specials. Also answered any questions they may
                have.
              </li>
              <li>Served cocktails and wine for all the customers at the bar and dinning floor.</li>
              <li>Work with fellow staff to provide a complete team-oriented service.</li>
            </ul>
            <p>
              <i>
                <strong>Construction Worker</strong>
              </i>
              , <u>Family's Construction and Woodshop Company</u>, NYC <span>| May 2014 - June 2016</span>
            </p>
            <ul>
              <li>Seasonal job that involves a lot of physical activity and attention to detail.</li>
            </ul>
            <p>
              <i>
                <strong>Delivery Rep</strong>
              </i>
              , <u>Fresh Direct</u>, NYC <span>| March 2014 - May 2014</span>
            </p>
            <ul>
              <li>Ensured delivery orders reach their destination.</li>
            </ul>
            <p>
              <i>
                <strong>Soccer Coach</strong>
              </i>
              , <u>Brooklyn Patriots Soccer Club</u>, NYC <span>| Aug 2013 - Feb 2014</span>
            </p>
            <ul>
              <li>
                Coached young athletes from the ages of 7 to 9 the basics of soccer through a series of 15 minute
                drills.
              </li>
              <li>Organized one-day soccer tournaments in school gymnasiums for different soccer clubs in the city.</li>
            </ul>
            <p>
              <i>
                <strong>Dog Handler</strong>
              </i>
              , <u>Biscuts & Bath</u>, NYC <span>| June 2013 - July 2013</span>
            </p>
            <ul>
              <li>Became responsible for ensuring the health, safety, and comfort of the dogs in care.</li>
            </ul>
            <p>
              <i>
                <strong>Health Educator</strong>
              </i>
              , <u>GWEC School-Based Health Center</u>, NYC <span>| Sept 2008 - June 2009</span>
            </p>
            <ul>
              <li>
                Selected for a highly competitive mentorship program designed to teach peers about health education
                around NYC public schools.
              </li>
            </ul>
          </>
        )}
      </Section>
      <Section>
        <h3>Affiliations</h3>
        <p>
          Treasurer, Code Dojo - Website Development Club <span>| Sept 2016 – Nov 2017</span>
        </p>
        <p>
          Photographer, theCAMPUS - Newspaper <span>| Sept 2016 - Dec 2016</span>
        </p>
        <p>
          Team Captain, CCNY - Men’s Soccer Team <span>| Aug 2013 - Nov 2013</span>
        </p>
      </Section>
    </ResumePage>
  );
}

export default Resume;
