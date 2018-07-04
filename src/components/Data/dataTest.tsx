import * as React from 'react';

export interface Props {
  age: number;
  name: string;
}

const dataTest = (props: Props) => {
  return (
    <div>
      {props.name} {props.age}
    </div>
  );
};

export default dataTest;
