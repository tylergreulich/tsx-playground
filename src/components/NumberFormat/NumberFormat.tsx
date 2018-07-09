import * as React from 'react';
import * as NumberFormat from 'react-number-format';

const numberFormat = (props: { value: string | number }) => (
  <NumberFormat
    value={props.value}
    thousandSeparator={true}
    prefix={'$'}
    displayType={'text'}
  />
);

export default numberFormat;
