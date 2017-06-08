import {compose} from 'redux';
import {withState} from 'recompose';

import Component from './component';

export default compose(
  withState('domain', 'updateDomain', ({entry}) => {
    return entry[0] || '';
  }),
  withState('range', 'updateRange', ({entry}) => {
    return entry[1] || '';
  }),
)(Component);
