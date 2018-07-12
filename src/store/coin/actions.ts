import axios from 'axios';
import { Dispatch } from 'redux';
import { CoinData } from './types';

export const getData = (coin: CoinData) => (dispatch: Dispatch) => {
  axios
    .get('https://api.coinmarketcap.com/v2/ticker/?limit=100')
    .then(res => dispatch({ type: 'GET_DATA', payload: res.data }))
    .catch(err => console.log(err));
};

export const changeLimit = (limitNumber: any) => (dispatch: Dispatch) => {
  axios
    .get(`https://api.coinmarketcap.com/v2/ticker/?limit=${limitNumber}`)
    .then(res => dispatch({ type: 'CHANGE_LIMIT', payload: res.data }))
    .catch(err => console.log(err));
};
