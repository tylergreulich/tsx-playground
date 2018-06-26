import * as React from 'react';
import { getData } from '../store/actions/swActions';

interface Props {
  getData: Function;
}

export default class Data extends React.Component<Props> {
  public componentDidMount() {
    this.props.getData();
  }

  public render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}
