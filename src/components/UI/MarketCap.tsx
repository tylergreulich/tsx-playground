import * as React from 'react';
import { DataProps } from '../models/DataProps';
import NumberFormat from '../NumberFormat/NumberFormat';

const marketCap = (props: DataProps) => {
  const { data } = props.coin;
  return (
    <span>
      {data[0] !== undefined
        ? Object.keys(data[0].data)
            .map(item => data[0].data[item].quotes.USD.market_cap)
            .reduce((total: number, amount: number) => (
              <NumberFormat value={total + amount} />
            ))
        : 0}
    </span>
  );
};

export default marketCap;
