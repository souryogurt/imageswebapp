import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ui } from './ui';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: ['TICK'] })
  : compose;

export default function configureStore() {
  return createStore(
    combineReducers({
      ui
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
}
