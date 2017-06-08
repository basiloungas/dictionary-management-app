import React from 'react';
import {Button} from 'react-bootstrap';

export default (props) => {
  const {
    entry,
    editRow,
    deleteRow,
  } = props;

  const {domain, range} = entry;

  const onDeleteRow = (e) => {
    e.preventDefault();

    deleteRow();
  }

  const onEditRow = (e) => {
    e.preventDefault();

    editRow();
  }

  return (
    <tr>
      <td>{domain}</td>
      <td>{range}</td>
      <td>
        <Button onClick={onEditRow} >Edit</Button>
        <Button bsStyle="danger" onClick={onDeleteRow}>Delete</Button>
      </td>
    </tr>
  )
}
