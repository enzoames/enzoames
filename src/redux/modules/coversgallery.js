import { LOAD_COVERSGALLERY_REQUEST, LOAD_COVERSGALLERY_SUCCESS, LOAD_COVERSGALLERY_FAILURE
} from './constants';

const initialState = {
  isFetching: false,
  loaded: false,
  coversgallery: [],
  gallerytype: "covers_gallery",
}

export default function coversgallery(state = initialState, action = {}){
  switch (action.type){
    case LOAD_COVERSGALLERY_REQUEST:
      return Object.assign({}, state, { 
        isFetching: true, 
        loaded: false,
      });

    case LOAD_COVERSGALLERY_SUCCESS:
      console.log("\nLOAD_COVERSGALLERY_SUCCESS\n", action);
      return Object.assign({}, state, {
        isFetching: false,
        loaded: true,
        coversgallery: action.result
      });
      
    case LOAD_COVERSGALLERY_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

export function isLoaded(globalState, coversgalleryID) {
  return globalState.coversgallery && globalState.coversgallery.loaded && (globalState.coversgallery.id === coversgalleryID);
}

export function sucess() {
  return { type: LOAD_COVERSGALLERY_SUCCESS };
}
