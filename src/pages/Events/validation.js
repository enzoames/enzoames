// Copyright 2019 enzoames Inc. All Rights Reserved.

export default function validation(state, event) {
  const error = [];

  if (!/\S+@\S+\.\S+/.test(state.email)) {
    error.push('Invalid Email');
  }
  if (state.first.length === 0) {
    error.push('First is a required');
  }
  if (state.last.length === 0) {
    error.push('Last is a required');
  }
  if (event === 'rent') {
    if (state.date.length === 0) {
      error.push('Date is a required');
    }
    if (state.timeStart.length === 0) {
      error.push('Time Start is a required');
    }
    if (state.timeEnd.length === 0) {
      error.push('Time End is a required');
    }
    if (state.purpose.length === 0) {
      error.push('Purpose is a required');
    }
    if (state.purpose.length > 100) {
      error.push('Purpose should be less than 100 characters');
    }
    if (state.funFact.length > 100) {
      error.push('Fun Fact should be less than 100 characters');
    }
    if (state.additionalInfo.length > 200) {
      error.push('Additional Information should be less than 200 characters');
    }
  }
  return error;
}
