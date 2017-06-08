import React from 'react';
import {Button} from 'react-bootstrap';

import ListItem from '../../../../components/list-item';

export default (props) => {
  const {
    item,
    deleteDictionary,
  } = props;

  const onDeleteDictionary = (e) => {
    e.preventDefault();

    if (!window.confirm('Are you sure you want to delete this dictionary?')) {
      return;
    }

    deleteDictionary(item.id);
  };

  return (
    <ListItem
      key={item.id}
      to={`/dictionary/${item.id}`}
      title={item.name}
      subtitle={`Entries: ${Object.keys(item.entries).length}`}
    >
      <Button bsStyle="danger" onClick={onDeleteDictionary} className="pull-right">delete</Button>
    </ListItem>
  );
};
