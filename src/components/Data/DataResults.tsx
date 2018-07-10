import * as React from 'react';
import { DataProps } from '../models/DataProps';
import NumberFormat from '../NumberFormat/NumberFormat';

import { ResultContainer, Results } from '../StyledComponents/Data';

class DataResults extends React.Component<DataProps, {}> {
  filterByPositiveRank = (coinData: any[], data: {}) => {
    coinData = Object.keys(data[0].data)
      .map(item => data[0].data[item])
      .sort((a, b) => a.rank - b.rank);
  };

  filterByNegativeRank = (coinData: any[], data: {}) => {
    coinData = Object.keys(data[0].data)
      .map(item => data[0].data[item])
      .sort((a, b) => b.rank - a.rank);
  };

  public render() {
    const { data } = this.props.coin;
    const { filter } = this.props;

    let coinData: any[] = [];

    if (data[0] !== undefined) {
      if (filter === 'positive' || filter === '') {
        this.filterByPositiveRank(coinData, data);
      } else if (filter === 'negative') {
        this.filterByNegativeRank(coinData, data);
      }
    }

    return (
      <Results>
        {coinData.map(result => (
          <section key={result.id}>
            <ResultContainer
              positiveGrowth={result.quotes.USD.percent_change_24h > 0}
            >
              <div>{result.rank}</div>
              <div>{result.name}</div>
              <div>
                <NumberFormat value={result.quotes.USD.market_cap} />
              </div>
              <div onClick={() => this.props.history.push('/test')}>
                <NumberFormat value={result.quotes.USD.price} />
              </div>
              <div>{result.quotes.USD.volume_24h}</div>
              <div>
                <NumberFormat value={result.quotes.USD.percent_change_24h} />
              </div>
            </ResultContainer>
          </section>
        ))}
      </Results>
    );
  }
}

export default DataResults;
