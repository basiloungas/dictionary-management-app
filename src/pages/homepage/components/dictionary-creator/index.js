import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';
import {withState} from 'recompose';

import Component from './component';
import {createDictionary} from '../../../../reducers/dictionaries/actions';

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    createDictionary,
  }, dispatch)
);

export default compose(
  connect(null, mapDispatchToProps),
  withState('value', 'updateValue', ''),
)(Component);
