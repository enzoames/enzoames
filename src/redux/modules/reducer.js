import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import multireducer from 'multireducer';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import auth from './auth';
import counter from './counter';
import gallery from './gallery';
import {reducer as form} from 'redux-form';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  multireducer: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  }),
  gallery,
});
