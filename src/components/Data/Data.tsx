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
  filterRank: string;
  filterChange: string;
  filterShow: string;
}

class Data extends React.Component<DataProps, DataState | CoinState> {
  public state: DataState = {
    filterRank: '',
    filterChange: '',
    filterShow: ''
  };

  public componentDidMount() {
    this.props.getData();
  }

  public onChangeRankHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    this.setState({
      filterChange: '',
      filterShow: '',
      filterRank: event.currentTarget.value
    });
  };

  public onChangeShowHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    this.setState({
      filterChange: '',
      filterShow: event.currentTarget.value,
      filterRank: ''
    });
  };

  public onChangeGrowthHandler = (
    event: React.FormEvent<HTMLSelectElement>
  ) => {
    this.setState({
      filterChange: event.currentTarget.value
    });
  };

  public render() {
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
            changeRank={this.onChangeRankHandler}
            changeShow={this.onChangeShowHandler}
            changeGrowth={this.onChangeGrowthHandler}
          />
          <ResultsLabel>
            <div>#</div>
            <div>Name</div>
            <div>{`Market Cap (USD)`}</div>
            <div>{`Price (USD)`}</div>
            <div>{`Volume (24h)`}</div>
            <div>{`Change (24h)`}</div>
          </ResultsLabel>
          <DataResults
            {...this.props}
            filterByRank={this.state.filterRank}
            filterByShow={this.state.filterShow}
            filterByChange={this.state.filterChange}
          />
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
