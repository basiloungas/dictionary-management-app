import React from 'react';

import EditView from './components/edit-view';
import ShowView from './components/show-view';

export default (props) => {
  const {
    editMode,
    toggleEditMode,

    entry,
    dictionaryId,
    onDeleteEntry,
    onEditEntry,
  } = props;

  const deleteRow = (entry) => {
    if (!window.confirm('Are you sure you want to delete this entry?')) {
      return;
    }

    onDeleteEntry({
      dictionaryId,
      ...entry,
    })
  }

  const updateRow = (entry) => {
    onEditEntry({
      dictionaryId,
      ...entry
    });
    toggleEditMode(!editMode);
  }

  const editRow = () => {
    toggleEditMode(!editMode);
  }

  if (editMode) {
    return <EditView entry={entry} cancelUpdate={editRow} updateRow={updateRow} deleteRow={deleteRow} />
  }

  return (
    <ShowView entry={entry} editRow={editRow} deleteRow={deleteRow} />
  )
}
