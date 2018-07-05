import axios from 'axios';
import { Dispatch } from 'redux';
import { PersonData } from './types';

export const getData = (person: PersonData) => (dispatch: Dispatch) => {
  axios
    .get('https://swapi.co/api/people/')
    .then(res => dispatch({ type: 'GET_DATA', payload: res.data }))
    .catch(err => console.log(err));
};
