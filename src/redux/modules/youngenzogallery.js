import { LOAD_YOUNGENZOGALLERY_REQUEST, LOAD_YOUNGENZOGALLERY_SUCCESS, LOAD_YOUNGENZOGALLERY_FAILURE
} from './constants';

const initialState = {
  isFetching: false,
  loaded: false,
  youngenzogallery: [],
  gallerytype: "youngenzo_gallery",
}

export default function youngenzogallery(state = initialState, action = {}){
  switch (action.type){
    case LOAD_YOUNGENZOGALLERY_REQUEST:
      return Object.assign({}, state, { 
        isFetching: true, 
        loaded: false,
      });

    case LOAD_YOUNGENZOGALLERY_SUCCESS:
      console.log("\LOAD_YOUNGENZOGALLERY_SUCCESS\n", action);
      return Object.assign({}, state, {
        isFetching: false,
        loaded: true,
        youngenzogallery: action.result
      });
      
    case LOAD_YOUNGENZOGALLERY_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

export function isLoaded(globalState, youngenzogalleryID) {
  return globalState.youngenzogallery && globalState.youngenzogallery.loaded && (globalState.youngenzogallery.id === youngenzogalleryID);
}

export function sucess() {
  return { type: LOAD_YOUNGENZOGALLERY_SUCCESS };
}
