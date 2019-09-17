import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ui } from './ui';
import { imagesapp } from './imagesapp';
import { images } from './images';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

export default function configureStore() {
  return createStore(
    combineReducers({
      ui,
      imagesapp,
      images
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
}
