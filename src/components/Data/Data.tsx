import * as React from 'react';

import { SwapiState } from '../../store/swapi/types';
import { AppState } from '../../store/rootReducer';
import { getData } from '../../store/swapi/actions';
import { connect } from 'react-redux';

type Props = SwapiState;

export interface DataProps {
  getData?: () => void;
}

class Data extends React.Component<Props & DataProps> {
  public static defaultProps: Partial<DataProps> = {
    getData: () => console.log('Default Props')
  };

  public componentDidMount() {
    this.props.getData();
  }

  public render() {
    console.log(this.props);
    return (
      <section>
        <h1>SWAPI</h1>
      </section>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  swapiProps: state.swapi
});

export default connect(
  mapStateToProps,
  { getData }
)(Data);
