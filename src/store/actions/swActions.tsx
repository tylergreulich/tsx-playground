import axios from 'axios';
import { Action } from 'redux';
import { actionTypes } from './actionTypes';
import { Results } from '../../components/types';

export interface ResultAction extends Action {
  result: Results[];
}

export const getData = () => (dispatch: any) => {
  axios
    .get('https://swapi.co/api/planets/')
    .then(res => dispatch({ type: actionTypes.GET_DATA }))
    .catch(err => console.log(err));
};
