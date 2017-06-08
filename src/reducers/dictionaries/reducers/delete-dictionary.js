import update from 'react-addons-update';

export default (state, action) => {
  const dictionaryIndex = state.findIndex(item => item.id === action.payload);

  return update(state, {$splice: [[dictionaryIndex, 1]]});
}
