import { actionTypes } from '../actions/actionTypes';
import { Reducer } from 'redux';
import { AppState } from '../AppState';
import { ResultAction } from '../actions/swActions';

const initialState = {
  result: []
};

const swReducer: Reducer<AppState> = (
  state: AppState = initialState,
  action: ResultAction
) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return state;

    default:
      return state;
  }
};

export default swReducer;
