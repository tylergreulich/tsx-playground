import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import Planets from '../Planets';
import { ActionTypes } from '../../store/actions/actionTypes';

interface OwnProps {
  age: number;
}

interface StateProps {
  results?: [any];
}

interface DispatchProps {
  getData: () => void;
}

type Props = StateProps & DispatchProps & OwnProps;

class Data extends React.Component<Props> {
  public componentDidMount() {
    this.props.getData();
  }

  public render() {
    console.log(this.props.results);
    return (
      <div>
        <Planets />
      </div>
    );
  }
}

const mapStateToProps = (state: {}, ownProps: OwnProps): StateProps => ({});

const mapDispatchToProps = (
  dispatch: Redux.Dispatch<any>,
  ownProps: OwnProps
): DispatchProps => ({
  getData: () => dispatch({ type: ActionTypes.GET_DATA })
});

export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(Data);
