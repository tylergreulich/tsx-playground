import * as React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/store';
import Data from './components/Data/Data';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div>
          <Data />
        </div>
      </Provider>
    );
  }
}

export default App;
