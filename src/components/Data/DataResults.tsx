import * as React from 'react';
import { DataProps } from '../models/DataProps';

const dataResults = (props: DataProps) => {
  const { data } = props.coin;

  let coinData = [];

  if (data[0] !== undefined) {
    coinData = Object.keys(data[0].data)
      .map(item => {
        return data[0].data[item];
      })
      .sort((a, b) => a.rank - b.rank);
  }

  return (
    <div>
      {coinData.map(result => (
        <section key={result.id}>
          <div style={{ display: 'flex' }}>
            <div>{result.rank}</div>
            <div>{result.name}</div>
            <div>{result.symbol}</div>
            <div>{result.quotes.USD.market_cap}</div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default dataResults;
