import * as React from 'react';
import { DataProps } from '../models/DataProps';

class DataFilters extends React.Component<DataProps, {}> {
  public render() {
    return (
      <>
        <section style={{ width: '100%', border: '.1rem solid #eee' }}>
          <h3
            style={{
              fontSize: '2rem',
              color: '#eee',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '6rem'
            }}
          >
            Filters
          </h3>
        </section>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            height: '10rem',
            border: '.1rem solid #eee'
          }}
        >
          <figure>
            <h4 style={{ color: '#eee', textAlign: 'center' }}>
              Filter By Rank
            </h4>
            <select
              onChange={this.props.changeRank}
              value={this.props.value}
              style={{ padding: '0 5rem', textAlign: 'center' }}
            >
              <option value="positive" style={{ textAlign: 'center' }}>
                Positive
              </option>
              <option value="negative">Negative</option>
            </select>
          </figure>
          <figure>
            <h4 style={{ color: '#eee', textAlign: 'center' }}>Show Only</h4>
            <select
              onChange={this.props.changeShow}
              value={this.props.value}
              style={{ padding: '0 5rem' }}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
          </figure>
          <figure>
            <h4 style={{ color: '#eee', textAlign: 'center' }}>
              Filter By Change(24hr)
            </h4>
            <select
              onChange={this.props.changeGrowth}
              value={this.props.value}
              style={{ padding: '0 5rem' }}
            >
              <option value="positive">Positive</option>
              <option value="negative">Negative</option>
            </select>
          </figure>
        </div>
      </>
    );
  }
}

export default DataFilters;
