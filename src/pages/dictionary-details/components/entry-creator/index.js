import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';
import {withState} from 'recompose';

import Component from './component';
import {createEntry} from '../../../../reducers/dictionaries/actions';

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    createEntry,
  }, dispatch)
);

export default compose(
  connect(null, mapDispatchToProps),
  withState('domain', 'updateDomain', ''),
  withState('range', 'updateRange', ''),
)(Component);
