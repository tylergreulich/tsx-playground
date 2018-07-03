import * as React from 'react';

import { SwapiState } from '../../store/swapi/types';
import { AppState } from '../../store/rootReducer';
import { getData } from '../../store/swapi/actions';
import { connect } from 'react-redux';

type Props = SwapiState;

class Data extends React.Component<Props & { getData: () => any }> {
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
