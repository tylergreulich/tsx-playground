import * as React from 'react';
import './App.css';
import Data from './components/Data';

import { Provider } from 'react-redux';
import store from './store/store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div>
          <Data getData={Function} />
        </div>
      </Provider>
    );
  }
}

export default App;
