import { LOAD_HOMEGALLERY_REQUEST, LOAD_HOMEGALLERY_SUCCESS, LOAD_HOMEGALLERY_FAILURE,
  LOAD_COVERSGALLERY_REQUEST, LOAD_COVERSGALLERY_SUCCESS, LOAD_COVERSGALLERY_FAILURE,
  LOAD_PEOPLEGALLERY_REQUEST, LOAD_PEOPLEGALLERY_SUCCESS, LOAD_PEOPLEGALLERY_FAILURE,
  LOAD_NYCGALLERY_REQUEST, LOAD_NYCGALLERY_SUCCESS, LOAD_NYCGALLERY_FAILURE,
  LOAD_STREETSGALLERY_REQUEST, LOAD_STREETSGALLERY_SUCCESS, LOAD_STREETSGALLERY_FAILURE,
  LOAD_FIXEDLINKGALLERY_REQUEST, LOAD_FIXEDLINKGALLERY_SUCCESS, LOAD_FIXEDLINKGALLERY_FAILURE,
} from '../../redux/modules/constants';


export function fetchGalleryHome() {
  return {
    types: [LOAD_HOMEGALLERY_REQUEST, LOAD_HOMEGALLERY_SUCCESS, LOAD_HOMEGALLERY_FAILURE],
    promise: (client) => client.get('api/ea/gallery/home_gallery/')
  };
}

export function fetchGalleryCovers() {
  return {
    types: [LOAD_COVERSGALLERY_REQUEST, LOAD_COVERSGALLERY_SUCCESS, LOAD_COVERSGALLERY_FAILURE],
    promise: (client) => client.get('api/ea/gallery/covers/')
  };
}

export function fetchGalleryPeople() {
  return {
    types: [LOAD_PEOPLEGALLERY_REQUEST, LOAD_PEOPLEGALLERY_SUCCESS, LOAD_PEOPLEGALLERY_FAILURE],
    promise: (client) => client.get('api/ea/gallery/people_gallery/')
  };
}

export function fetchGalleryNyc() {
  return {
    types: [LOAD_NYCGALLERY_REQUEST, LOAD_NYCGALLERY_SUCCESS, LOAD_NYCGALLERY_FAILURE],
    promise: (client) => client.get('api/ea/gallery/nyc_gallery/')
  };
}

export function fetchGalleryStreets() {
  return {
    types: [LOAD_STREETSGALLERY_REQUEST, LOAD_STREETSGALLERY_SUCCESS, LOAD_STREETSGALLERY_FAILURE],
    promise: (client) => client.get('api/ea/gallery/streets_gallery/')
  };
}

export function fetchGalleryFixedlink() {
  return {
    types: [LOAD_FIXEDLINKGALLERY_REQUEST, LOAD_FIXEDLINKGALLERY_SUCCESS, LOAD_FIXEDLINKGALLERY_FAILURE],
    promise: (client) => client.get('api/ea/gallery/fixedlink_gallery/')
  };
}

// export function fetchGallery(slug) {
//   return {
//     types: [LOAD_GALLERY_REQUEST, LOAD_GALLERY_SUCCESS, LOAD_GALLERY_FAILURE],
//     promise: (client) => client.get(`gallery/${slug}/`)
//   };
// }
