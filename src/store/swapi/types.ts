import { Action } from 'redux';

export interface SwapiState {
  data: PersonData[];
}

export interface PersonData {
  name: string;
  eye_color: string;
  birth_year: string;
}

export interface GetDataAction extends Action {
  type: 'GET_DATA';
  payload: PersonData;
}

export type SwapiActions = GetDataAction;
