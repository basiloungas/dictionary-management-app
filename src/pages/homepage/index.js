import React from 'react';
import {Jumbotron, PageHeader} from 'react-bootstrap';
import DictionaryList from '../../containers/dictionary-list';
import DictionaryCreator from './components/dictionary-creator';

export default () => (
  <div>
    <Jumbotron>
      <h1>Dictionary Management System</h1>
    </Jumbotron>

    <PageHeader>Available dictionaries:</PageHeader>
    <DictionaryCreator />
    <DictionaryList />
  </div>
);
