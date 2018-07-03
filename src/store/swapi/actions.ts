import axios from 'axios';
import { Dispatch } from 'redux';

export const getData = () => (dispatch: Dispatch) => {
  axios
    .get('https://swapi.co/api/people/')
    .then(res => dispatch({ type: 'GET_DATA', payload: res.data }))
    .catch(err => console.log(err));
};
