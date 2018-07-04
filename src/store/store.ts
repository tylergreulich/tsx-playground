import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { AppState, rootReducer } from './rootReducer';

const configureStore = (initialState?: AppState): Store<AppState> => {
  const composeEnhancers = composeWithDevTools({});
  return createStore<AppState, any, {}, void>(
    rootReducer,
    initialState!,
    composeEnhancers(applyMiddleware(thunk))
  );
};

const store = configureStore();

export default store;
