import { Action } from 'redux';

export interface CoinState {
  data: CoinData[];
}

export interface CoinData {
  name: string;
  eye_color: string;
  birth_year: string;
}

export interface GetDataAction extends Action {
  type: 'GET_DATA';
  payload: CoinData;
}

export type CoinActions = GetDataAction;
