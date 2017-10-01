import { LOAD_FIXEDLINKGALLERY_REQUEST, LOAD_FIXEDLINKGALLERY_SUCCESS, LOAD_FIXEDLINKGALLERY_FAILURE
} from './constants';

const initialState = {
  isFetching: false,
  loaded: false,
  fixedlinkgallery: [],
  gallerytype: "fixedlink_gallery",
}

export default function fixedlinkgallery(state = initialState, action = {}){
  switch (action.type){
    case LOAD_FIXEDLINKGALLERY_REQUEST:
      return Object.assign({}, state, { 
        isFetching: true, 
        loaded: false,
      });

    case LOAD_FIXEDLINKGALLERY_SUCCESS:
      console.log("\LOAD_FIXEDLINKGALLERY_SUCCESS\n", action);
      return Object.assign({}, state, {
        isFetching: false,
        loaded: true,
        fixedlinkgallery: action.result
      });
      
    case LOAD_FIXEDLINKGALLERY_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

export function isLoaded(globalState, fixedlinkgalleryID) {
  return globalState.fixedlinkgallery && globalState.fixedlinkgallery.loaded && (globalState.fixedlinkgallery.id === fixedlinkgalleryID);
}

export function sucess() {
  return { type: LOAD_FIXEDLINKGALLERY_SUCCESS };
}
