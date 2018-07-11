import * as React from 'react';
import { DataProps } from '../models/DataProps';

class DataFilters extends React.Component<DataProps, {}> {
  public render() {
    return (
      <section>
        <h3 style={{ fontSize: '2rem', color: '#eee' }}>Filters</h3>
        <select onChange={this.props.changed} value={this.props.value}>
          <option value="positive">Positive</option>
          <option value="negative">Negative</option>
        </select>
      </section>
    );
  }
}

export default DataFilters;
