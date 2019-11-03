// Copyright 2019 enzoames Inc. All Rights Reserved.

export default function removeEmptyStrings(obj) {
  for (var prop in obj) {
    // dive deeper in
    if (typeof obj[prop] === 'object') {
      removeEmptyStrings(obj[prop]);
    } else if (obj[prop] === '') {
      // delete elements that are empty strings
      delete obj[prop];
    }
  }
  return obj;
}
