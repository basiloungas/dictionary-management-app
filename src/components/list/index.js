import React from 'react';
import {ListGroup} from 'react-bootstrap';

export default ({list, renderItem}) => (
  <ListGroup>
    {list.map(renderItem)}
  </ListGroup>
);
