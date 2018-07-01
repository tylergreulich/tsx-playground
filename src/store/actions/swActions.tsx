import axios from 'axios';
import { ActionTypes } from './actionTypes';

export const getData = (
  name: string,
  population: string,
  climate: string[] | string
) => (dispatch: any) => {
  axios
    .get('https://swapi.co/api/planets/')
    .then(res => dispatch({ type: ActionTypes.GET_DATA, payload: res.data }))
    .catch(err => console.log(err));
};
