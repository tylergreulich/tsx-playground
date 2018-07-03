import { SwapiState, SwapiActions } from './types';
import { Reducer } from 'redux';

export const initialState: SwapiState = {
  data: []
};

const reducer: Reducer<SwapiState> = (
  state: SwapiState = initialState,
  action
) => {
  switch ((action as SwapiActions).type) {
    case 'GET_DATA':
      return { ...state, data: [action.payload, ...state.data] };

    default:
      return state;
  }
};

export default reducer;
