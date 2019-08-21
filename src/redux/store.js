import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

const initialState = {
  log: "log coming from redux",
  text: 'redux text'
};

export default function initializeState(state = initialState) {
  return createStore(
    rootReducer,
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  )
}
