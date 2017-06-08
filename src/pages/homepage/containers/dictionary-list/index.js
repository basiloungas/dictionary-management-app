import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withProps} from 'recompose';

import DictionaryListItem from '../../components/dictionary-list-item';
import List from '../../../../components/list';

const mapStateToProps = (state) => ({list: state.dictionaries});

export default compose(
  connect(mapStateToProps),
  withProps({renderItem: (item) => <DictionaryListItem key={item.id} item={item} />}),
)(List);
