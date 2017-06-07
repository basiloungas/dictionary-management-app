import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';
// import {withState} from 'recompose';

import Component from './component';
// import {createDictionary} from '../../../../reducers/dictionaries/actions';

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: {
        id
      }
    }
  } = ownProps;

  return {
    dictionary: state.dictionaries.find(item => item.id === id)
  }
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    // createDictionary,
  }, dispatch)
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // withProps({
  // }),
)(Component);
