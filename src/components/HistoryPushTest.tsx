import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface HistoryPushProps extends RouteComponentProps<any> {
  pageNumber: number;
}

const HistoryPushTest = (props: HistoryPushProps) => {
  return (
    <div>
      <h1 onClick={() => props.history.push('/')}>This is page #2</h1>
    </div>
  );
};

export default withRouter(HistoryPushTest);
