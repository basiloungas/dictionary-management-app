import React from 'react';

import Table from '../../../../components/table';
import Row from './components/row';
import './style.css';

export default (props) => {
  const {
    entries,
    dictionaryId,
  } = props;

  const renderRow = (entry) => {
    return (<Row key={`${entry[0]}-${entry[1]}`} entry={entry} dictionaryId={dictionaryId} />);
  }

  return (
    <Table
      headerItems={['Domain', 'Range', 'Actions']}
      items={entries}
      renderRow={renderRow}
    />
  )
}
