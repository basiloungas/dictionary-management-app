import {connect} from 'react-redux';

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

export default connect(mapStateToProps)(Component);
