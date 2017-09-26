import { LOAD_GALLERY_REQUEST, LOAD_GALLERY_SUCCESS, LOAD_GALLERY_FAILURE } from '../../redux/modules/constants';

export function fetchGalleryHome() {
  return {
    types: [LOAD_GALLERY_REQUEST, LOAD_GALLERY_SUCCESS, LOAD_GALLERY_FAILURE],
    promise: (client) => client.get('api/gallery/home_gallery/')
  };
}


export function fetchGalleryCovers() {
  return {
    types: [LOAD_GALLERY_REQUEST, LOAD_GALLERY_SUCCESS, LOAD_GALLERY_FAILURE],
    promise: (client) => client.get('api/gallery/covers/')
  };
}

// export function fetchGallery(slug) {
//   return {
//     types: [LOAD_GALLERY_REQUEST, LOAD_GALLERY_SUCCESS, LOAD_GALLERY_FAILURE],
//     promise: (client) => client.get(`gallery/${slug}/`)
//   };
// }
