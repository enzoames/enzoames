// Copyright 2019 enzoames Inc. All Rights Reserved.

import React, { useState } from 'react';
import styled from 'styled-components';

const ResumePage = styled.div`
  margin-top: 112px;
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

  const handleReadMore = () => {
    setReadMore(true);
  };

  return (
    <ResumePage>
      <Section>
        <h3>Work Experience</h3>
        <p>
          <strong>Software Engineer & Founder</strong>,{' '}
          <u>
            <a
              href="https://mr-profit.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              MR-PROFIT.COM
            </a>
          </u>
          , NYC <span>| Jun 2025 - Present</span>
        </p>
        <ul>
          <li>
            Founded and led the development of MR-PROFIT.COM, a trading
            analytics dashboard for stock day traders
          </li>
          <li>
            The platform is designed to help traders track their performance,
            analyze their trades, and improve their trading strategies.
          </li>
          <li>Developed using Next.js and fully serverless on AWS.</li>
        </ul>
        <p>
          <strong>Software Engineer</strong>, <u>Foursquare</u>, NYC{' '}
          <span>| Oct 2018 - May 2024</span>
        </p>
        <ul>
          <li>
            During my time at Foursquare, I worked mainly on the team
            responsible for the Developer Console, helping improve the tools and
            experience that developers rely on every day. I also assisted other
            teams in their vision of creating a cohesive lineup of Foursquare
            products.
          </li>
          <li>
            - Maintained and expanded the Foursquare Developer Console, focusing
            on performance, usability, and new functionality.
          </li>
          <li>
            - Led several projects end-to-end, breaking down work, coordinating
            with other engineers, and making sure we stayed aligned and on
            track.
          </li>
          <li>
            - Contributed to our internal reusable frontend component library
            (Cupcake), helping bring consistency and speed to the UI work across
            multiple product teams.
          </li>
          <li>
            - Led the initiative to adopt a Serverless Architecture for a
            company-wide system designed to help Foursquare stay compliant with
            local and international privacy regulations
          </li>
          <li>
            - Mentored new engineers, helping them get up to speed and
            supporting their growth on the team.
          </li>
        </ul>
        <p>
          <strong>Software Developer</strong>, <u>Club Sporta</u>, NYC{' '}
          <span>| Jan 2018 - Dec 2018</span>
        </p>
        <ul>
          <li>
            Managed and working in a team of four to develop Club Sporta’s MVP.
            Taking the project from a landing page to a full-fledge web app in
            an agile manner.
          </li>
          <li>
            Used Sketch to design the application’s interface and software
            development tools such a Trello - to assign tasks and manage sprints
            effectively.
          </li>
          <li>Managed development and deployment to an AWS EC2 instance.</li>
        </ul>
        {!readMore && (
          <p onClick={handleReadMore}>
            <strong className="readMore">
              click here to really get to know me...
            </strong>
          </p>
        )}
        {readMore && (
          <>
            <p>
              <strong>Student Software Developer</strong>, <u>CUNY Tech Prep</u>
              , NYC <span>| Sept 2017 - June 2018</span>
            </p>
            <ul>
              <li>
                Selected to competitive full stack JavaScript training program
                that prepares students for careers in software engineering.
              </li>
            </ul>
            <ul>
              <li>
                Learn in-demand technologies like React, Node + Express and
                processes for design, implementation, testing, and deployment.
              </li>
            </ul>
            <p>
              <strong>Software Developer Intern</strong>,{' '}
              <u>Alpine Capital Advisors</u>, NYC{' '}
              <span>| Feb 2017 - Aug 2017</span>
            </p>
            <ul>
              <li>
                Worked in a team of three to create and design a web app that
                provides investment opportunities to Chinese or foreign
                investors.
              </li>
            </ul>
            <ul>
              <li>
                Contributed to the web scraping team by developing spiders that
                navigate through different websites to extract articles and
                market data.
              </li>
              <li>
                Front end stack consisted of React & Redux and back end Django
                Rest, Mongo, and Redis.
              </li>
            </ul>
            <p>
              <strong>Computer Science Tutor</strong>,{' '}
              <u>SEEK PAL Tutoring Center</u>, NYC{' '}
              <span>| Sept 2016 - Jan 2017</span>
            </p>
            <ul>
              <li>
                Introduced caseload of 12-15 freshmen and sophomore students to
                the fundamental concepts of computer science and evaluated
                student progress over the semester.
              </li>
            </ul>
            <p>
              <strong>Sports Photographer</strong>,{' '}
              <u>CCNY Athletics Department</u>, NYC{' '}
              <span>| Sept 2015 - May 2016</span>
            </p>
            <ul>
              <li>
                Photographed student athletes as they compete in CUNY conference
                matches. Final edited images were presented to the Assistant
                Athletics Coordinator Director at CCNY for website use.
              </li>
            </ul>
            <p>
              <strong>Freelance Photographer</strong>, <u>enzoames.com</u>, NYC{' '}
              <span>| Jan 2015 - Present</span>
            </p>
            <ul>
              <li>
                My love for photography and art, led me to become a freelance
                photographer. I shoot portraits, still, sports, and landscape
                photography till this day and I'm available upon request. It's a
                profession I keep very close.
              </li>
            </ul>
            <p>
              <strong>Bartender, Bar Back, Server, Food Runner</strong>,{' '}
              <u>Pure Food and Wine</u>, NYC <span>| Aug 2014 - June 2015</span>
            </p>
            <ul>
              <li>
                Presented, explained menu, and informed patrons of daily
                specials. Also answered any questions they may have.
              </li>
              <li>
                Served cocktails and wine for all the customers at the bar and
                dinning floor.
              </li>
              <li>
                Work with fellow staff to provide a complete team-oriented
                service.
              </li>
            </ul>
            <p>
              <strong>Construction Worker</strong>,{' '}
              <u>Family's Construction and Woodshop Company</u>, NYC{' '}
              <span>| May 2014 - June 2016</span>
            </p>
            <ul>
              <li>
                Seasonal job that involves a lot of physical activity and
                attention to detail.
              </li>
            </ul>
            <p>
              <strong>Delivery Rep</strong>, <u>Fresh Direct</u>, NYC{' '}
              <span>| March 2014 - May 2014</span>
            </p>
            <ul>
              <li>Ensured delivery orders reach their destination.</li>
            </ul>
            <p>
              <strong>Soccer Coach</strong>,{' '}
              <u>Brooklyn Patriots Soccer Club</u>, NYC{' '}
              <span>| Aug 2013 - Feb 2014</span>
            </p>
            <ul>
              <li>
                Coached young athletes from the ages of 7 to 9 the basics of
                soccer through a series of 15 minute drills.
              </li>
              <li>
                Organized one-day soccer tournaments in school gymnasiums for
                different soccer clubs in the city.
              </li>
            </ul>
            <p>
              <strong>Dog Handler</strong>, <u>Biscuts & Bath</u>, NYC{' '}
              <span>| June 2013 - July 2013</span>
            </p>
            <ul>
              <li>
                Became responsible for ensuring the health, safety, and comfort
                of the dogs in care.
              </li>
            </ul>
            <p>
              <strong>Health Educator</strong>,{' '}
              <u>GWEC School-Based Health Center</u>, NYC{' '}
              <span>| Sept 2008 - June 2009</span>
            </p>
            <ul>
              <li>
                Selected for a highly competitive mentorship program designed to
                teach peers about health education around NYC public schools.
              </li>
            </ul>
          </>
        )}
      </Section>
      <Section>
        <h3>Education</h3>
        <p>The City College of New York, CUNY, NYC</p>
        <p>BS, Computer Science, Grove School of Engineering, GPA: 3.4</p>
        <p>June 2018</p>
      </Section>
      <Section>
        <h3>Qualifications</h3>
        <p>
          <strong>Technical Skills:</strong> TypeScript, Next.js, OpenNext,
          Javascript, Scala, React, Redux, Tailwind CSS, Styled Components,
          Node.js, HTML, CSS, AWS, Python, Gatsby, Webpack, Django REST
          Framework.
        </p>
        <p>
          <strong>Design Software Tools:</strong> Figma and Adobe Lightroom.
        </p>
        <p>
          <strong>Spoken Languages:</strong> Fluent in English and Spanish.
        </p>
      </Section>
      <Section>
        <h3>College Affiliations</h3>
        <p>
          Treasurer, Code Dojo - Website Development Club{' '}
          <span>| Sept 2016 – Nov 2017</span>
        </p>
        <p>
          Photographer, theCAMPUS - Newspaper{' '}
          <span>| Sept 2016 - Dec 2016</span>
        </p>
        <p>
          Team Captain, CCNY - Men’s Soccer Team{' '}
          <span>| Aug 2013 - Nov 2013</span>
        </p>
      </Section>
      <br />
      <br />
      <br />
    </ResumePage>
  );
}

export default Resume;
