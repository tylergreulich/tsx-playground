import { combineReducers, Reducer } from 'redux';

import { SwapiState } from './swapi/types';
import swapiReducer from './swapi/reducer';

export interface AppState {
  swapi: SwapiState;
}

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  swapi: swapiReducer
});

export default rootReducer;
