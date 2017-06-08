import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import DictionaryListItem from './component';
import {deleteDictionary} from '../../../../reducers/dictionaries/actions';

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteDictionary
}, dispatch);

export default connect(null, mapDispatchToProps)(DictionaryListItem);
