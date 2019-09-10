import { createSelector } from 'reselect';

export default function theme(state = {}, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme
      };
    default:
      return state;
  }
}

export function getTheme(state) {
  return state.ui.theme;
}

export const isDarkTheme = createSelector(
  getTheme,
  theme => theme.isDarkTheme !== false
);

export function toggleTheme() {
  return {
    type: 'TOGGLE_THEME'
  };
}
