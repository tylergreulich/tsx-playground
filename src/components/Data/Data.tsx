import * as React from 'react';

import { SwapiState } from '../../store/swapi/types';
import { AppState } from '../../store/rootReducer';
import { getData } from '../../store/swapi/actions';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import DataTest from './dataTest';

type Props = SwapiState;

export interface DataProps extends RouteComponentProps<any> {
  swapiProps: {
    data: [
      {
        results: [
          {}
        ];
      }
    ];
  };
  onClick?: () => void;
}

class Data extends React.Component<
  Props & { getData: () => any; history: () => void } & DataProps
> {
  public componentDidMount() {
    this.props.getData();
  }

  public render() {
    const { data } = this.props.swapiProps;
    console.log(data[0]);

    let swapiData;

    if (data[0]) {
      const swapiMap = data[0].results.map((person: { name: string }) => {
        swapiData = <div>{person.name}</div>;
      });
    }

    return (
      <div>
        <section>
          <h1 onClick={() => this.props.history.push('/history-push-test')}>
            SWAPI
          </h1>
          {swapiData}
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
