import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import buildStore from './store';
import Layout from './components/layout';
import logo from './logo.svg';
import './App.css';

const store = buildStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Route exact path="/" component={App}/>
      </Layout>
    </Router>
  </Provider>
);
