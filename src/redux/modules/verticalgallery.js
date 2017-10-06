import { LOAD_VERTICALGALLERY_REQUEST, LOAD_VERTICALGALLERY_SUCCESS, LOAD_VERTICALGALLERY_FAILURE
} from './constants';

const initialState = {
  isFetching: false,
  loaded: false,
  verticalgallery: [],
  gallerytype: "vertical_gallery",
}

export default function verticalgallery(state = initialState, action = {}){
  switch (action.type){
    case LOAD_VERTICALGALLERY_REQUEST:
      return Object.assign({}, state, { 
        isFetching: true, 
        loaded: false,
      });

    case LOAD_VERTICALGALLERY_SUCCESS:
      console.log("\LOAD_VERTICALGALLERY_SUCCESS\n", action);
      return Object.assign({}, state, {
        isFetching: false,
        loaded: true,
        verticalgallery: action.result
      });
      
    case LOAD_VERTICALGALLERY_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

export function isLoaded(globalState, verticalgalleryID) {
  return globalState.verticalgallery && globalState.verticalgallery.loaded && (globalState.verticalgallery.id === verticalgalleryID);
}

export function sucess() {
  return { type: LOAD_VERTICALGALLERY_SUCCESS };
}
