import * as React from 'react';
import { CoinState } from '../../store/coin/types';
import { AppState } from '../../store/rootReducer';
import { getData } from '../../store/coin/actions';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './DataClasses.css';

import DataResults from './DataResults';
import { DataProps } from '../models/DataProps';

class Data extends React.Component<
  DataProps & { getData: () => any },
  CoinState
> {
  public componentDidMount() {
    this.props.getData();
  }

  public render() {
    return (
      <div>
        <section>
          <h1 onClick={() => this.props.history.push('/history-push-test')}>
            SWAPI
          </h1>
          <p>Change Color</p>
          <DataResults {...this.props} />
        </section>
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
