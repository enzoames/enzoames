import { LOAD_PEOPLEGALLERY_REQUEST, LOAD_PEOPLEGALLERY_SUCCESS, LOAD_PEOPLEGALLERY_FAILURE
} from './constants';

const initialState = {
  isFetching: false,
  loaded: false,
  peoplegallery: [],
  gallerytype: "people_gallery",
}

export default function peoplegallery(state = initialState, action = {}){
  switch (action.type){
    case LOAD_PEOPLEGALLERY_REQUEST:
      return Object.assign({}, state, { 
        isFetching: true, 
        loaded: false,
      });

    case LOAD_PEOPLEGALLERY_SUCCESS:
      console.log("\LOAD_PEOPLEGALLERY_SUCCESS\n", action);
      return Object.assign({}, state, {
        isFetching: false,
        loaded: true,
        peoplegallery: action.result
      });
      
    case LOAD_PEOPLEGALLERY_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

export function isLoaded(globalState, peoplegalleryID) {
  return globalState.peoplegallery && globalState.peoplegallery.loaded && (globalState.peoplegallery.id === peoplegalleryID);
}

export function sucess() {
  return { type: LOAD_PEOPLEGALLERY_SUCCESS };
}
