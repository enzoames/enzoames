import { LOAD_GALLERY_REQUEST, LOAD_GALLERY_SUCCESS, LOAD_GALLERY_FAILURE } from './constants';

const initialState = {
  isFetching: false,
  loaded: false,
  galleryList: [],
}

export default function gallery(state = initialState, action = {}){
  switch (action.type){
    case LOAD_GALLERY_REQUEST:
      return Object.assign({}, state, { 
        isFetching: true, 
        loaded: false,
      });

    case LOAD_GALLERY_SUCCESS:
      console.log("\n=>IN REDUX", action);
      return Object.assign({}, state, {
        isFetching: false,
        loaded: true,
        galleryList: action.result
      });
    case LOAD_GALLERY_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

export function isLoaded(globalState, zipID) {
  return globalState.gallery && globalState.gallery.loaded && (globalState.gallery.id === galleryID);
}

export function sucess() {
  return { type: LOAD_GALLERY_SUCCESS };
}
