export const UPLOAD_NEW_IMAGE_REQUESTED = 'UPLOAD_NEW_IMAGE_REQUESTED';
export const UPLOAD_NEW_IMAGE_SUCCESS = 'UPLOAD_NEW_IMAGE_SUCCESS';
export const UPLOAD_NEW_IMAGE_FAIL = 'UPLOAD_NEW_IMAGE_FAIL';

const BACKEND_HOST =
  (process.env.REACT_APP_SECURE === 'true' ? 'https://' : 'http://') +
  process.env.REACT_APP_BACKEND;

const initialState = (function() {
  return {};
})();

export function imagesapp(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function uploadNewImageRequested(name) {
  return {
    type: UPLOAD_NEW_IMAGE_REQUESTED,
    name
  };
}

export function uploadNewImageFailed(message) {
  return {
    type: UPLOAD_NEW_IMAGE_FAIL,
    message
  };
}

export function uploadNewImageSuccess(image) {
  return {
    type: UPLOAD_NEW_IMAGE_SUCCESS,
    image
  };
}

export function uploadNewImage(title) {
  return async (dispatch, getState) => {
    dispatch(uploadNewImageRequested(title));
    try {
      let form = new FormData();
      form.append('title', title);
      var response = await fetch(BACKEND_HOST + '/images', {
        method: 'POST',
        mode: 'cors',
        body: form
      });
    } catch (e) {
      dispatch(uploadNewImageFailed(e.message));
      throw new Error(e);
    }
    if (!response.ok) {
      const reason = await response.text();
      dispatch(uploadNewImageFailed(reason));
      throw new Error(reason);
    }
    try {
      const payload = await response.json();
      dispatch(uploadNewImageSuccess(payload));
      return payload;
    } catch (e) {
      dispatch(uploadNewImageFailed(e.message));
      throw new Error(e);
    }
  };
}
