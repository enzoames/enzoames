// Copyright 2019 enzoames Inc. All Rights Reserved.

import React, { useState } from 'react';
import styled from 'styled-components';
import media from '../styles/media';

const Wrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding 30px;
`;

const BreadCrums = styled.h2`
  font-size: 18px;
  margin: 0 0 30px 0;
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
  background-color: #eaeaea;
  height: 300px;
  margin: 0 20px 30px 0;
  box-shadow: ${props => (props.active ? '0 0 3.5px rgba(0, 0, 0, 0.5);' : 'none')};
  cursor: pointer;
`;

const Rsvp = styled.div`
  background-color: black;
  color: white;
  width: 150px;
  padding: 10px 0;
  text-align: center;
  border-radius: 7px;

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

function Events() {
  const [event, setEvent] = useState('rent');

  return (
    <Wrap>
      <BreadCrums>Upcoming Events</BreadCrums>
      <EventList>
        <Event active={event === 'rent'} onClick={() => setEvent('rent')}></Event>
        <Event active={event === 'party'} onClick={() => setEvent('party')}></Event>
        <Event active={event === 'gallery'} onClick={() => setEvent('gallery')}></Event>
      </EventList>
      <Rsvp type={event}>rsvp</Rsvp>
    </Wrap>
  );
}

export default Events;
