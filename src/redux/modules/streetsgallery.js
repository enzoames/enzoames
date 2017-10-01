import { LOAD_STREETSGALLERY_REQUEST, LOAD_STREETSGALLERY_SUCCESS, LOAD_STREETSGALLERY_FAILURE
} from './constants';

const initialState = {
  isFetching: false,
  loaded: false,
  streetsgallery: [],
  gallerytype: "streets_gallery",
}

export default function streetsgallery(state = initialState, action = {}){
  switch (action.type){
    case LOAD_STREETSGALLERY_REQUEST:
      return Object.assign({}, state, { 
        isFetching: true, 
        loaded: false,
      });

    case LOAD_STREETSGALLERY_SUCCESS:
      console.log("\LOAD_STREETSGALLERY_SUCCESS\n", action);
      return Object.assign({}, state, {
        isFetching: false,
        loaded: true,
        streetsgallery: action.result
      });
      
    case LOAD_STREETSGALLERY_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

export function isLoaded(globalState, streetsgalleryID) {
  return globalState.streetsgallery && globalState.streetsgallery.loaded && (globalState.streetsgallery.id === streetsgalleryID);
}

export function sucess() {
  return { type: LOAD_STREETSGALLERY_SUCCESS };
}
