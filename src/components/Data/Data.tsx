import * as React from 'react';
import { CoinState } from '../../store/coin/types';
import { AppState } from '../../store/rootReducer';
import { getData } from '../../store/coin/actions';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './DataClasses.css';

import DataResults from './DataResults';
import { DataProps } from '../models/DataProps';
import DataFilters from './DataFilters/DataFilters';

import { CryptoContainer, ResultsLabel } from '../StyledComponents/Data';

interface DataState {
  accumMarketCap: number;
}

class Data extends React.Component<
  DataProps & { getData: () => any },
  CoinState & DataState
> {
  public componentDidMount() {
    this.props.getData();
  }

  public calcMarketCap = () => {
    const { data } = this.props.coin;
    if (data[0] !== undefined) {
      Object.keys(data[0].data)
        .map(item => data[0].data[item].quotes.USD.market_cap)
        .reduce((total, amount) => Math.round(total + amount));
    }
  };

  public render() {
    console.log(this.state);
    return (
      <div>
        <CryptoContainer>
          <h1 onClick={() => this.props.history.push('/history-push-test')}>
            Top 100 Cryptos
          </h1>
          <div>
            <h3>{`Market Cap: Null`}</h3>
            <h3>{`24h Vol`}</h3>
          </div>
          <ResultsLabel>
            <div>#</div>
            <div>Name</div>
            <div>{`Market Cap (USD)`}</div>
            <div>{`Price (USD)`}</div>
            <div>{`Volume (24h)`}</div>
            <div>{`Change (24h)`}</div>
          </ResultsLabel>
          <DataResults {...this.props} />
          {this.calcMarketCap()}
        </CryptoContainer>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): any => ({
  coin: state.coin
});

export default connect(
  mapStateToProps,
  { getData }
)(withRouter(Data));
