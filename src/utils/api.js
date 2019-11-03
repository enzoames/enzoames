// Copyright 2019 enzoames Inc. All Rights Reserved.

const S3 = 'https://s3.amazonaws.com/enzoames.com';
const API = 'https://api.enzoames.com/v1';

export default {
  events: async () => {
    const response = await fetch(`${S3}/events/table.json`);
    const json = await response.json();
    return json;
  },
  postRsvp: async rsvp => {
    const response = await fetch(`${API}/rsvp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rsvp)
    });
    const json = await response.json();
    return json;
  }
};
