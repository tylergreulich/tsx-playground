import * as React from 'react';
import { DataProps } from '../models/DataProps';
import NumberFormat from '../NumberFormat/NumberFormat';

import { ResultContainer, Results } from '../StyledComponents/Data';

export default class DataResults extends React.Component<DataProps, {}> {
  public render() {
    const { data } = this.props.coin;
    const { filterByRank, filterByShow, filterByChange } = this.props;

    let coinData: any[] = [];

    if (data[0] !== undefined) {
      if (filterByRank === 'positive') {
        coinData = Object.keys(data[0].data)
          .map(item => data[0].data[item])
          .sort((a, b) => a.rank - b.rank);
      } else if (filterByRank === 'negative') {
        coinData = Object.keys(data[0].data)
          .map(item => data[0].data[item])
          .sort((a, b) => b.rank - a.rank);
      } else {
        coinData = Object.keys(data[0].data)
          .map(item => data[0].data[item])
          .sort((a, b) => a.rank - b.rank);
      }

      if (filterByChange === 'positive') {
        coinData = Object.keys(data[0].data)
          .map(item => data[0].data[item])
          .sort(
            (a, b) =>
              b.quotes.USD.percent_change_24h - a.quotes.USD.percent_change_24h
          );
      } else if (filterByChange === 'negative') {
        coinData = Object.keys(data[0].data)
          .map(item => data[0].data[item])
          .sort(
            (a, b) =>
              a.quotes.USD.percent_change_24h - b.quotes.USD.percent_change_24h
          );
      }
    }

    if (this.props.limit === 100) {
      coinData = Object.keys(data[0].data)
        .map(item => data[0].data[item])
        .slice(0, 100);
    } else if (this.props.limit === 75) {
      coinData = Object.keys(data[0].data)
        .map(item => data[0].data[item])
        .slice(0, 75);
    } else if (this.props.limit === 50) {
      coinData = Object.keys(data[0].data)
        .map(item => data[0].data[item])
        .slice(0, 50);
    } else if (this.props.limit === 20) {
      coinData = Object.keys(data[0].data)
        .map(item => data[0].data[item])
        .slice(0, 20);
    } else if (this.props.limit === 10) {
      console.log(this.props.limit);
      coinData = Object.keys(data[0].data)
        .map(item => data[0].data[item])
        .slice(0, 10);
    }

    return (
      <Results className="resultDiv">
        {coinData.map(result => (
          <section key={result.id} style={{ height: '100%' }}>
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
