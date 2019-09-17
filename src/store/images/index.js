import { UPLOAD_NEW_IMAGE_SUCCESS, FETCH_IMAGES_SUCCESS } from '../imagesapp';

let images_counter = 0;

export function images(state = {}, action) {
  switch (action.type) {
    case UPLOAD_NEW_IMAGE_SUCCESS:
      const imageID = action.image.id ? action.image.id : images_counter++;
      return {
        ...state,
        [imageID]: action.image
      };
    case FETCH_IMAGES_SUCCESS:
      return {
        ...action.images.reduce((map, image) => {
          const imageID = image.id ? image.id : images_counter++;
          map[imageID] = image;
          return map;
        }, {})
      };
    default:
      return state;
  }
}

export function getAll(state) {
  return state.images;
}

export function empty(state) {
  return Object.keys(state.images).length === 0;
}
