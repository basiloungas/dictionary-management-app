import React from 'react';
import {Button} from 'react-bootstrap';

export default (props) => {
  const {
    domain,
    updateDomain,
    range,
    updateRange,

    entry,
    updateRow,
    deleteRow,
    cancelUpdate,
  } = props;

  const onCancelUpdate = (e) => {
    e.preventDefault();

    cancelUpdate();
  }

  const onUpdateRow = (e) => {
    e.preventDefault();

    updateRow({
      domain,
      range,
    });
  }

  const onDeleterow = (e) => {
    e.preventDefault();

    const [domain, range] = entry;
    deleteRow({domain, range});
  }

  const handleOnChange = (updater) => (e) => {
    e.preventDefault();

    updater(e.target.value);
  }

  return (
    <tr>
      <td><input type="text" placeholder="Domain" onChange={handleOnChange(updateDomain)} value={domain} /></td>
      <td><input type="text" placeholder="Domain" onChange={handleOnChange(updateRange)} value={range} /></td>
      <td>
        <Button disabled={!domain || !range} onClick={onUpdateRow} >Update</Button>
        <Button onClick={onCancelUpdate} >Cancel</Button>
        <Button bsStyle="danger" onClick={onDeleterow} >Delete</Button>
      </td>
    </tr>
  );
}
