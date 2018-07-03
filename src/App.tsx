import * as React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/store';
import Data from './components/Data/Data';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={Data} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
