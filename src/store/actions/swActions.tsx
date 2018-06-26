import axios from 'axios';

export const getData = () => (dispatch: any) => {
  axios
    .get('https://swapi.co/api/planets/1/')
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};
