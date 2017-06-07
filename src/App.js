import React from 'react';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import buildStore from './store';
import Layout from './components/layout';
import Homepage from './pages/homepage';
import DictionaryDetails from './pages/dictionary-details';

const store = buildStore();

export default () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/dictionary/:id" component={DictionaryDetails}/>
      </Layout>
    </Router>
  </Provider>
);
