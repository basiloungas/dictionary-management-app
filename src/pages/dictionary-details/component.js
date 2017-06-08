import React from 'react';
import {PageHeader} from 'react-bootstrap';
import {Link} from 'react-router-dom'

import EntryCreator from './components/entry-creator';
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
      <EntryCreator dictionaryId={id} />
      <DictionaryEntriesList dictionaryId={id} entries={entries} />
    </div>
  );
}
