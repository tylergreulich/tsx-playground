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
          {
            name: string;
          }
        ];
      }
    ];
  };
}

class Data extends React.Component<
  Props & DataProps & { getData: () => any; history: () => void }
> {
  public componentDidMount() {
    this.props.getData();
  }

  public render() {
    const { data } = this.props.swapiProps;

    let swapiData;

    if (data[0]) {
      console.log(this.props.swapiProps);
      const swapiMap = data[0].results.map(
        result =>
          (swapiData = (
            <div
              style={{
                width: '500px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              {result.name}
            </div>
          ))
      );
      console.log(data[0].results);
    }

    return (
      <section>
        <h1 onClick={() => this.props.history.push('/history-push-test')}>
          SWAPI
        </h1>
        <DataTest name={'Tyler'} age={22} />
        {swapiData}
      </section>
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
