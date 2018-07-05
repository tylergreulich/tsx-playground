import * as React from 'react';
import { DataProps } from './Data';

const dataResults = (props: DataProps) => {
  const { data } = props.swapiProps;

  return (
    <div>
      {data[0]
        ? data[0].results.map((result, index) => (
            <section key={index}>
              <div>{result.name}</div>
            </section>
          ))
        : null}
    </div>
  );
};

export default dataResults;
