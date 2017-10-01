import { LOAD_NYCGALLERY_REQUEST, LOAD_NYCGALLERY_SUCCESS, LOAD_NYCGALLERY_FAILURE
} from './constants';

const initialState = {
  isFetching: false,
  loaded: false,
  nycgallery: [],
  gallerytype: "nyc_gallery",
}

export default function nycgallery(state = initialState, action = {}){
  switch (action.type){
    case LOAD_NYCGALLERY_REQUEST:
      return Object.assign({}, state, { 
        isFetching: true, 
        loaded: false,
      });

    case LOAD_NYCGALLERY_SUCCESS:
      console.log("\LOAD_NYCGALLERY_SUCCESS\n", action);
      return Object.assign({}, state, {
        isFetching: false,
        loaded: true,
        nycgallery: action.result
      });
      
    case LOAD_NYCGALLERY_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

export function isLoaded(globalState, nycgalleryID) {
  return globalState.nycgallery && globalState.nycgallery.loaded && (globalState.nycgallery.id === nycgalleryID);
}

export function sucess() {
  return { type: LOAD_NYCGALLERY_SUCCESS };
}
