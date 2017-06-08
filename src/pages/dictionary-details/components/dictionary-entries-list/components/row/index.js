import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';
import {withState} from 'recompose';

import Component from './component';
import {deleteEntry, editEntry} from '../../../../../../reducers/dictionaries/actions';

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    onDeleteEntry: deleteEntry,
    onEditEntry: editEntry,
  }, dispatch)
);

export default compose(
  connect(null, mapDispatchToProps),
  withState('editMode', 'toggleEditMode', false),
)(Component);
