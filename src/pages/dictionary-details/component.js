import React from 'react';
import {PageHeader, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

import EntryCreator from './components/entry-creator';
import DictionaryEntriesList from './components/dictionary-entries-list';

export default (props) => {
  const {
    dictionary,
    validateDictionary,
  } = props;

  const {
    id,
    name,
    entries,
  } = dictionary;

  const onValidateDictionary = (e) => {
    e.preventDefault();

    validateDictionary(dictionary.id);
  }

  return (
    <div>
      <Link to="/">&lt; back to list</Link>

      <PageHeader>Details for dictionary: "{name}"</PageHeader>
      <EntryCreator dictionaryId={id} />
      <DictionaryEntriesList dictionaryId={id} entries={entries} />
      <Button className="pull-right" bsStyle="info" bsSize="large" onClick={onValidateDictionary} >Validate</Button>
    </div>
  );
}
