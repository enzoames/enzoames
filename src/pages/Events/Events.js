// Copyright 2019 enzoames Inc. All Rights Reserved.

import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
import useSetState from '../../hooks/useSetState';
import BlinkCursor from '../../components/BlinkCursor';
import ENZ1 from '../../styles/img/ENZ_8172-1.jpg';
import ENZ2 from '../../styles/img/ENZ_8177-2.jpg';
import ENZ3 from '../../styles/img/ENZ_8179-3.jpg';
import ENZ4 from '../../styles/img/ENZ_8182-4.jpg';
import validation from './validation';
import fields from './fields';

const Wrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding 30px;
`;

const BreadCrums = styled.h2`
  font-size: 18px;
  margin: 0 0 30px 0;
  position: relative;

  div:first-child {
    display: inline-block;
    cursor: pointer;
  }
`;

const EventList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: auto;

  div:last-child {
    margin-right: 0;
  }
`;

const Event = styled.div`
  width: 300px;
  min-width: 300px;
  display: inline-block;
  height: 300px;
  margin: 0 20px 30px 0;
  box-shadow: ${props => (props.active ? '0 0 3.5px rgba(0, 0, 0, 0.5);' : 'none')};
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 1.05) 0%, rgba(0, 0, 0, 0) 65%);
  }

  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  > h3,
  h4 {
    position: absolute;
    color: white;
    top: 20px;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0 15px;
  }

  > h3 {
    top: 45px;
  }
`;

const Rsvp = styled.div`
  width: 150px;
  padding: 10px 0;
  text-align: center;
  border: 2px solid black;
  box-sizing: border-box;
  border-radius: 7px;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    background-color: black;
    color: white;
  }

  ${media.md`
    margin-left: ${props => {
      switch (props.type) {
        case 'rent':
          return '0';
        case 'party':
          return '320px';
        case 'gallery':
          return '640px';
        default:
          return '0';
      }
    }};
  `}
`;

const Info = styled.div`
  display: flex;
`;

const Description = styled.div`
  width: 50%;
  padding-right: 30px;

  > h2:first-child {
    margin-top: 0;
  }

  > h2 {
    margin: 30px 0;
    font-size: 18px;
  }

  > p {
    font-size: 16px;
    line-height: 20px;
  }
`;

const Form = styled.form`
  margin-bottom: 15px;
  width: 100%;

  > input {
    padding-bottom: 3px;
    margin: 0 auto 30px;
    width: 100%;

    ${media.md`
      width: 50%;
    `}
  }

  input[type='textarea'] {
    padding-bottom: 3px;
  }

  > label {
    display: inline-block;
    width: 100%;

    ${media.md`
      width: 50%;
    `}

    > input {
      width: 100%;
      margin-bottom: 30px;
    }
  }
`;

const Error = styled.div`
  color: red;
  margin-bottom: 30px;
`;

const Images = styled.div`
  width: 50%;

  > img {
    width: 100%;
    min-height: 200px;
    height: 250px;
    object-fit: cover;
  }
`;

function Events() {
  const [state, setState] = useSetState({
    ...fields,
    event: 'rent',
    rsvp: false,
    error: '',
    sent: false
  });

  const handleChange = e => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setState({ error: '' });
    const errorArray = validation(state, event);
    setState({ error: errorArray.join(', ') });

    if (errorArray.length === 0) {
      // TODO: Post to Dynamo DB
      console.log('state', state);
      setState({ sent: true, ...fields });
    }
  };

  const {
    event,
    rsvp,
    first,
    last,
    email,
    linkedIn,
    funFact,
    instagram,
    website,
    date,
    timeStart,
    timeEnd,
    purpose,
    additionalInfo,
    error,
    sent
  } = state;

  return (
    <Wrap>
      <BreadCrums>
        <div onClick={() => setState({ rsvp: false, sent: false })}>Upcoming Events</div> {rsvp && '/ Rsvp'}
        <BlinkCursor active />
      </BreadCrums>
      {rsvp ? (
        sent ? (
          <h4>
            <strong>Rsvp was sent, I will get in touch soon</strong>
          </h4>
        ) : (
          <Form onSubmit={handleSubmit}>
            <input name="first" type="text" placeholder="First" value={first} onChange={handleChange} />
            <input name="last" type="text" placeholder="Last" value={last} onChange={handleChange} />
            <input name="email" type="text" placeholder="Email" value={email} onChange={handleChange} />
            <input name="linkedIn" type="text" placeholder="LinkedIn" value={linkedIn} onChange={handleChange} />
            <input name="instagram" type="text" placeholder="Instagram" value={instagram} onChange={handleChange} />
            <input name="website" type="text" placeholder="Website" value={website} onChange={handleChange} />

            {event === 'rent' && (
              <>
                <label>
                  Date
                  <br />
                  <input name="date" type="date" value={date} onChange={handleChange} />
                </label>
                <label>
                  Time Start
                  <br />
                  <input name="timeStart" type="time" value={timeStart} onChange={handleChange} />
                </label>
                <label>
                  Time End
                  <br />
                  <input name="timeEnd" type="time" value={timeEnd} onChange={handleChange} />
                </label>
                <label>
                  Purpose
                  <br />
                  <input
                    name="purpose"
                    type="textarea"
                    placeholder="I need the space for a photoshoot!"
                    value={purpose}
                    onChange={handleChange}
                  />
                </label>
              </>
            )}
            <input name="funFact" type="textarea" placeholder="Fun Fact" value={funFact} onChange={handleChange} />
            <input
              name="additionalInfo"
              type="textarea"
              placeholder="Additional Information"
              value={additionalInfo}
              onChange={handleChange}
            />
            {error && <Error>{error}</Error>}
            <Rsvp as="button" type="submit">
              submit
            </Rsvp>
          </Form>
        )
      ) : (
        <>
          <EventList>
            <Event active={event === 'rent'} onClick={() => setState({ event: 'rent' })}>
              <img src={ENZ1} alt="inside of apartment" />
              <h4>Book This Place!</h4>
              <h3>Great for photography, film, and small events</h3>
            </Event>
            {/*
            <Event active={event === 'party'} onClick={() => setState({ event: 'party' })}></Event>
            <Event active={event === 'gallery'} onClick={() => setState({ event: 'gallery' })}></Event>
            */}
          </EventList>
          <Rsvp type={event} onClick={() => setState({ rsvp: true })}>
            rsvp
          </Rsvp>
        </>
      )}
      <Info>
        <Description>
          <h2>What?</h2>
          <p>
            This post is calling out to photographers, filmmakers and all sorts of artists that need a space to work
          </p>
          <h2>Why?</h2>
          <p>Because this is an awesome apartment with stairs and garden space</p>
          <h2>Where?</h2>
          <p>New York, NY</p>
          <h2>When?</h2>
          <p>Ready to be booked! rsvp also to check it out for free</p>
          <h2>Who?</h2>
          <p>Entrepenuers, artists, or anyone</p>
          <h2>Price</h2>
          <p>Fair. Depending on the event</p>
        </Description>
        <Images>
          <img src={ENZ1} alt="inside of apartment" />
          <img src={ENZ2} alt="stairs inside apartment" />
          <img src={ENZ3} alt="garden and backyard" />
          <img src={ENZ4} alt="garden and backyard" />
        </Images>
      </Info>
    </Wrap>
  );
}

export default Events;
