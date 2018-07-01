import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  result: []
};

const swReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_DATA:
      return {
        ...state,
        result: action.payload
      };

    default:
      return state;
  }
};

export default swReducer;
