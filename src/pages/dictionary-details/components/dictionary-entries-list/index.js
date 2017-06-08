import React from 'react';

import Table from '../../../../components/table';
import Row from './components/row';
import './style.css';

export default props => {
  const {
    entries,
    dictionaryId,
  } = props;

  const renderRow = entry => <Row key={entry.id} entry={entry} dictionaryId={dictionaryId} />;

  return (
    <Table
      headerItems={['Domain', 'Range', 'Actions']}
      items={entries}
      renderRow={renderRow}
    />
  )
}
