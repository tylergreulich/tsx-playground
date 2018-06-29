import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../store/actions/swActions';
import Planets from '../Planets';

interface Props {
  getData: () => any;
}

class Data extends React.Component<Props> {
  public componentDidMount() {
    this.props.getData();
  }

  public render() {
    return (
      <div>
        <Planets  />
      </div>
    );
  }
}


export default connect<Props>(
  null,
  { getData }
)(Data);
