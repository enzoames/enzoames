import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import multireducer from 'multireducer';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import auth from './auth';
import homegallery from './homegallery';
import coversgallery from './coversgallery';
import fixedlinkgallery from './fixedlinkgallery';
import nycgallery from './nycgallery';
import peoplegallery from './peoplegallery';
import streetsgallery from './streetsgallery';
import {reducer as form} from 'redux-form';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  homegallery,
  coversgallery,
  fixedlinkgallery,
  nycgallery,
  peoplegallery,
  streetsgallery,
});


// import counter from './counter';
// multireducer: multireducer({
//   counter1: counter,
//   counter2: counter,
//   counter3: counter
// }),