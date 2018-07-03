import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { AppState, rootReducer } from './rootReducer';

function configureStore(initialState?: AppState): Store<AppState> {
  const composeEnhancers = composeWithDevTools({});
  return createStore<AppState, any, any, any>(
    rootReducer,
    initialState!,
    composeEnhancers(applyMiddleware(thunk))
  );
}

const store = configureStore();

export default store;
