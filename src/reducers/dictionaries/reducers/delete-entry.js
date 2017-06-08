import update from 'react-addons-update';

export default (state, action) => {
  const {
    entryId,
    dictionaryId,
  } = action.payload;

  const dictionaryIndex = state.findIndex(item => item.id === dictionaryId);
  const dictionary = state[dictionaryIndex];
  const entryIndex = dictionary.entries.findIndex(item => item.id === entryId);

  return update(state, {[dictionaryIndex]: {entries: {$splice: [[entryIndex, 1]]}}});
}
