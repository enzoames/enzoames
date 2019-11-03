// Copyright 2019 enzoames Inc. All Rights Reserved.

import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import ENZ1 from '../../styles/img/ENZ_8172-1.jpg';
import ENZ2 from '../../styles/img/ENZ_8177-2.jpg';
import ENZ3 from '../../styles/img/ENZ_8179-3.jpg';
import ENZ4 from '../../styles/img/ENZ_8182-4.jpg';
import media from '../../styles/media';
import useSetState from '../../hooks/useSetState';
import BlinkCursor from '../../components/BlinkCursor';
import validation from './validation';
import fields from './fields';
import api from '../../utils/api';
import { GA_URL, GA_CAT, GA_EL } from '../../utils/config';
import removeEmptyStrings from './removeEmptyStrings';
import Analytics from '../../utils/Analytics';

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

  span {
    bottom: 3px;
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
  min-width: 260px;
  display: inline-block;
  height: 300px;
  margin: 0 20px 30px 0;
  box-shadow: ${props => (props.active ? '0 0 3.5px rgba(0, 0, 0, 0.5);' : 'none')};
  cursor: pointer;
  position: relative;

  ${media.xxs`
    min-width: 300px
  `}

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
  background-color: white;

  ${props =>
    !props.disabled &&
    css`
      &:hover {
        background-color: black;
        color: white;
      }
    `}

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
  display: block;

  ${media.sm`
    display: flex;
  `}
`;

const Description = styled.div`
  width: 100%;

  ${media.sm`
    width: 50%;
    padding-right: 30px;  
  `}

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

const Images = styled.div`
  width: 100%;

  ${media.sm`
    width: 50%;
    padding-right: 30px;  
  `}

  > img {
    width: 100%;
    min-height: 200px;
    height: 250px;
    object-fit: cover;
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

function Events() {
  const [state, setState] = useSetState({
    events: null,
    currEvent: null,
    rsvp: false,
    error: '',
    sent: false,
    formInteraction: 0,
    posting: false
  });

  const [formFields, setFormFields] = useSetState(fields);

  useEffect(() => {
    Analytics.logPageImpression(GA_URL.EVENTS);
    api.events().then(res => setState({ events: res, currEvent: res[0] }), err => setState({ error: err.message }));
  }, [setState]);

  const handleBack = () => {
    setState({ rsvp: false, sent: false });
    Analytics.logEventsBreadcrum();
  };

  const handleRsvp = () => {
    setState({ rsvp: true });
    Analytics.logButtonClick(GA_CAT.EVENTS, GA_EL.RSVP_BUTTON);
  };

  const handleChange = e => {
    if (state.formInteraction === 15) {
      Analytics.logFormInteraction(GA_CAT.EVENTS);
    }
    const formInteraction = state.formInteraction + 1;
    setState({ formInteraction });
    setFormFields({ [e.target.name]: e.target.value });
  };

  const handleClickEvent = event => {
    setState({ currEvent: event });
    Analytics.logClickEvent(event.event);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setState({ error: '', posting: true });
    const errorArray = validation(formFields, currEvent.event);
    setState({ error: errorArray.join(', ') });

    if (errorArray.length === 0) {
      Analytics.logButtonSubmit(GA_CAT.EVENTS, GA_EL.SUBMIT_BUTTON);
      const form = { ...formFields };
      form['event'] = currEvent;
      api.postRsvp(removeEmptyStrings(form)).then(res => {
        if (res.status >= 200 && res.status < 400) {
          setState({ sent: true, posting: false });
          setFormFields(fields);
        } else {
          setState({ error: res.error });
        }
      });
    }
  };

  const { events, currEvent, rsvp, error, sent, posting } = state;
  const {
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
    additionalInfo
  } = formFields;

  return (
    <Wrap>
      <BreadCrums>
        <div onClick={handleBack}>
          Upcoming Events {rsvp && '/ Rsvp'}
          <BlinkCursor active />
        </div>
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

            {currEvent.event === 'rent' && (
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
            <Rsvp as="button" type="submit" disabled={posting}>
              {posting ? 'loading...' : 'submit'}
            </Rsvp>
          </Form>
        )
      ) : (
        <>
          <EventList>
            {events ? (
              events.map(event => (
                <Event key={event.id} active={event.event === currEvent.event} onClick={() => handleClickEvent(event)}>
                  <img src={ENZ1} alt="inside of apartment" />
                  <h4>{event.cardTitle}</h4>
                  <h3>{event.cardSubTitle}</h3>
                </Event>
              ))
            ) : (
              <h4>Loading...</h4>
            )}
          </EventList>
          <Rsvp type={currEvent && currEvent.event} onClick={handleRsvp}>
            {currEvent ? 'rsvp' : 'Loading...'}
          </Rsvp>
        </>
      )}
      <Info>
        <Description>
          <h2>What?</h2>
          <p>{currEvent ? currEvent.what : 'Loading...'}</p>
          <h2>Why?</h2>
          <p>{currEvent ? currEvent.why : 'Loading...'}</p>
          <h2>Where?</h2>
          <p>{currEvent ? currEvent.where : 'Loading...'}</p>
          <h2>When?</h2>
          <p>{currEvent ? currEvent.when : 'Loading...'}</p>
          <h2>Who?</h2>
          <p>{currEvent ? currEvent.who : 'Loading...'}</p>
          <h2>Price</h2>
          <p>{currEvent ? currEvent.price : 'Loading...'}</p>
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
