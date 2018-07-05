import * as React from 'react';
import { SwapiState } from '../../store/swapi/types';
import { AppState } from '../../store/rootReducer';
import { getData } from '../../store/swapi/actions';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './DataClasses.css';

import DataResults from './DataResults';

type Props = SwapiState;

export interface DataProps extends RouteComponentProps<{}> {
  swapiProps: {
    data: [
      {
        results: [
          {
            name: string;
          }
        ];
      }
    ];
  };
  onClick?: () => void;
}

export interface DataState {
  isActive: boolean;
}

class Data extends React.Component<Props & { getData: () => any } & DataProps> {
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
  swapiProps: state.swapi
});

export default connect(
  mapStateToProps,
  { getData }
)(withRouter(Data));
