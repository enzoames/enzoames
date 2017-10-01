import { LOAD_HOMEGALLERY_REQUEST, LOAD_HOMEGALLERY_SUCCESS, LOAD_HOMEGALLERY_FAILURE
} from './constants';

const initialState = {
  isFetching: false,
  loaded: false,
  homegallery: [],
  gallerytype: "home_gallery",
}

export default function homegallery(state = initialState, action = {}){
  switch (action.type){
    case LOAD_HOMEGALLERY_REQUEST:
      return Object.assign({}, state, { 
        isFetching: true, 
        loaded: false,
      });

    case LOAD_HOMEGALLERY_SUCCESS:
      console.log("\LOAD_HOMEGALLERY_SUCCESS\n", action);
      return Object.assign({}, state, {
        isFetching: false,
        loaded: true,
        homegallery: action.result
      });
      
    case LOAD_HOMEGALLERY_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

export function isLoaded(globalState, homegalleryID) {
  return globalState.homegallery && globalState.homegallery.loaded && (globalState.homegallery.id === homegalleryID);
}

export function sucess() {
  return { type: LOAD_HOMEGALLERY_SUCCESS };
}
