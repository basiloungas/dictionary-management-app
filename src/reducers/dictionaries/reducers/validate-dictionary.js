import update from 'react-addons-update';

import Validator from '../../../services/validator';

export default (state, action) => {
  const dictionaryIndex = state.findIndex(item => item.id === action.payload);

  const validator = new Validator();
  const validatedDictionary = validator.validate(state[dictionaryIndex]);

  return update(state, {$splice: [[dictionaryIndex, 1, validatedDictionary]]});
}
