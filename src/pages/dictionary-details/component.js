import React from 'react';
import {PageHeader} from 'react-bootstrap';
import {Link} from 'react-router-dom'

import DictionaryEntriesList from './components/dictionary-entries-list';

export default (props) => {
  const {
    dictionary,
  } = props;

  const {
    id,
    name,
    entries,
  } = dictionary;

  return (
    <div>
      <Link to="/">&lt; back to list</Link>

      <PageHeader>Details for dictionary: "{name}"</PageHeader>

      <DictionaryEntriesList entries={Object.entries(entries)} />
    </div>
  );
}
