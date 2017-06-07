import React from 'react';
import {Button} from 'react-bootstrap';
import Table from '../../../../components/table';

export default (props) => {
  const {
    entries,
    onDeleteEntry,
    dictionaryId,
  } = props;

  const deleteRow = (e, data) => {
    e.preventDefault();

    if (!window.confirm('Are you sure you want to delete this entry?')) {
      return;
    }

    onDeleteEntry({
      dictionaryId,
      ...data,
    })
  }

  const renderRow = ([domain, range]) => {
    return (
      <tr key={`${domain}-${range}`}>
        <td>{domain}</td>
        <td>{range}</td>
        <td>
          <Button bsStyle="danger" onClick={(e) => deleteRow(e, {domain, range})}>Delete</Button>
        </td>
      </tr>
    );
  }

  return (
    <Table
      headerItems={['Domain', 'Range', 'Actions']}
      items={entries}
      renderRow={renderRow}
    />
  )
}
