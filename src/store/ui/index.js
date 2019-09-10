import { combineReducers } from 'redux';
import theme from './theme';

export const ui = combineReducers({
  theme
});

export * from './theme';
