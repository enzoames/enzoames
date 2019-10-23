// Copyright 2019 enzoames Inc. All Rights Reserved.

const S3 = 'https://s3.amazonaws.com/enzoames.com';

export default {
  events: async () => {
    const response = await fetch(`${S3}/events/table.json`);
    const json = await response.json();
    return json;
  }
};
