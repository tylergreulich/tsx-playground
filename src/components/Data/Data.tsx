import * as React from 'react';
import { CoinState } from '../../store/coin/types';
import { AppState } from '../../store/rootReducer';
import { getData } from '../../store/coin/actions';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import DataResults from './DataResults';
import { DataProps } from '../models/DataProps';
import DataFilters from '../UI/DataFilters';
import MarketCap from '../UI/MarketCap';

import {
  CryptoContainer,
  MarketCapContainer,
  ResultsLabel
} from '../StyledComponents/Data';

interface DataState {
  filterByPositive: boolean;
  filterByNegative: boolean;
  optionFilter: string;
}

class Data extends React.Component<DataProps, DataState | CoinState> {
  public state: DataState = {
    filterByPositive: false,
    filterByNegative: false,
    optionFilter: ''
  };

  public componentDidMount() {
    this.props.getData();
  }

  public onChangeHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    this.setState({ optionFilter: event.currentTarget.value });
    console.log(this.state.optionFilter);
  };

  public render() {
    if (this.state.filterByPositive) {
      console.log('positive');
    }

    return (
      <div>
        <CryptoContainer>
          <h1 onClick={() => this.props.history.push('/history-push-test')}>
            Top 100 Cryptos
          </h1>
          <MarketCapContainer>
            <h3>
              Market Cap: <MarketCap {...this.props} />{' '}
            </h3>
          </MarketCapContainer>
          <DataFilters
            {...this.props}
            changed={this.onChangeHandler}
            filterValue={this.state.optionFilter}
          />
          <ResultsLabel>
            <div>#</div>
            <div>Name</div>
            <div>{`Market Cap (USD)`}</div>
            <div>{`Price (USD)`}</div>
            <div>{`Volume (24h)`}</div>
            <div>{`Change (24h)`}</div>
          </ResultsLabel>
          <DataResults {...this.props} filter={this.state.optionFilter} />
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
