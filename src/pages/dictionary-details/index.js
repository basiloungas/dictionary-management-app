import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Component from './component';

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
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Component);
