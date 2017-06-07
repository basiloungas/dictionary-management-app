import React from 'react';
import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';
import {withProps} from 'recompose';
import {Button} from 'react-bootstrap';

import List from '../../components/list';
import ListItem from '../../components/list-item';

const mapStateToProps = (state) => ({list: state.dictionaries});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const renderItem = (item) => (
  <ListItem
    key={item.id}
    to={`/dictionary/${item.id}`}
    title={item.name}
    subtitle={`Entries: ${Object.keys(item.entries).length}`}
  >
    <Button bsStyle="danger" className="pull-right">delete</Button>
  </ListItem>
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withProps({renderItem}),
)(List);
