import { CoinState, CoinActions } from './types';
import { Reducer } from 'redux';

export const initialState: CoinState = {
  data: []
};

const reducer: Reducer<CoinState> = (
  state: CoinState = initialState,
  action
) => {
  switch ((action as CoinActions).type) {
    case 'GET_DATA':
      return { ...state, data: [action.payload, ...state.data] };

    default:
      return state;
  }
};

export default reducer;
