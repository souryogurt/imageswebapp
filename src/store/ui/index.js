import { combineReducers } from 'redux';
import theme from './theme';
import uploadImageDialog from './uploadImageDialog';

export const ui = combineReducers({
  theme,
  uploadImageDialog
});

export * from './theme';
export * from './uploadImageDialog';
