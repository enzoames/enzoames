// Copyright 2019 enzoames Inc. All Rights Reserved.

import { useReducer } from 'react';

function useSetState(initialState = {}) {
  return useReducer((oldState, newState) => ({ ...oldState, ...newState }), initialState);
}

export default useSetState;
