import * as React from 'react';

export const SortByPositive = (coinData: any, data: {}) => {
  coinData = Object.keys(data[0].data)
    .map(item => data[0].data[item])
    .sort((a, b) => a.rank - b.rank);
  console.log(data);
};

export const SortByNegative = (coinData: any, data: {}) => {
  coinData = Object.keys(data[0].data)
    .map(item => data[0].data[item])
    .sort((a, b) => b.rank - a.rank);
};
