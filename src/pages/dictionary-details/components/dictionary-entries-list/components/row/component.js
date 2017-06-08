import React from 'react';
import {Alert} from 'react-bootstrap';

import EditView from './components/edit-view';
import ShowView from './components/show-view';
import {Severities} from '../../../../../../services/validator/validations/base-validation';

export default (props) => {
  const {
    editMode,
    toggleEditMode,

    entry,
    dictionaryId,
    onDeleteEntry,
    onEditEntry,
  } = props;

  const deleteRow = () => {
    if (!window.confirm('Are you sure you want to delete this entry?')) {
      return;
    }

    onDeleteEntry({
      dictionaryId,
      entryId: entry.id,
    })
  }

  const updateRow = (data) => {
    onEditEntry({
      dictionaryId,
      entryId: entry.id,
      data,
    });
    toggleEditMode(!editMode);
  }

  const editRow = () => {
    toggleEditMode(!editMode);
  }

  const buildErrorMessages = (errors) => {
    return Object.keys(errors)
      .map(errorKey => {
        const {
          severity,
          message,
        } = errors[errorKey];

        const alertType = severity === Severities.Normal
          ? 'warning'
          : 'danger';

        return <Alert key={message} bsStyle={alertType}>{message}</Alert>;
      });
  }

  const hasErrors = entry.errors && Object.keys(entry.errors).length > 0;

  const errorsContent = hasErrors
    ? <div className="errors-container">{buildErrorMessages(entry.errors)}</div>
    : null;

  if (editMode) {
    return (
      <EditView
        errorsContent={errorsContent}
        entry={entry}
        cancelUpdate={editRow}
        updateRow={updateRow}
        deleteRow={deleteRow}
      />
    );
  }

  return (
    <ShowView
      errorsContent={errorsContent}
      entry={entry}
      editRow={editRow}
      deleteRow={deleteRow}
    />
  );
}
