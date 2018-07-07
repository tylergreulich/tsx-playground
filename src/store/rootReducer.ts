import { combineReducers, Reducer } from 'redux';

import { CoinState } from './coin/types';
import coinReducer from './coin/reducer';

export interface AppState {
  coin: CoinState;
}

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  coin: coinReducer
});

export default rootReducer;
