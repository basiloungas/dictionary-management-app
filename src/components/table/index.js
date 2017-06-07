import React from 'react';
import {Table} from 'react-bootstrap';

const EmptyItem = () => (
  <tr>
    <td colSpan="100"><p>No entries yet</p></td>
  </tr>
);

export default ({headerItems, items, renderRow}) => (
  <Table striped condensed hover responsive>
    <thead>
      <tr>
        {headerItems.map(item => <th key={item}>{item}</th>)}
      </tr>
    </thead>
    <tbody>
      { items.length
        ? items.map(renderRow)
        : <EmptyItem />
      }
    </tbody>
  </Table>
);
