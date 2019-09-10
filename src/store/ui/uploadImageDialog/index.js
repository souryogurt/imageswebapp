import { createSelector } from 'reselect';

export const OPEN_UPLOAD_IMAGE_DIALOG = 'OPEN_UPLOAD_IMAGE_DIALOG';
export const CLOSE_UPLOAD_IMAGE_DIALOG = 'CLOSE_UPLOAD_IMAGE_DIALOG';

export default function uploadImageDialog(state = {}, action) {
  switch (action.type) {
    case OPEN_UPLOAD_IMAGE_DIALOG:
      return {
        ...state,
        isOpen: true
      };
    case CLOSE_UPLOAD_IMAGE_DIALOG:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
}

export function getUploadImageDialog(state) {
  return state.ui.uploadImageDialog;
}

export const isUploadImageDialogOpen = createSelector(
  getUploadImageDialog,
  dlg => dlg !== undefined && dlg.isOpen === true
);

export function openUploadImageDialog() {
  return {
    type: OPEN_UPLOAD_IMAGE_DIALOG
  };
}

export function closeUploadImageDialog() {
  return {
    type: CLOSE_UPLOAD_IMAGE_DIALOG
  };
}
