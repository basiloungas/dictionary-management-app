import update from 'react-addons-update';

export default (state, action) => {
  const {
    dictionaryId,
    entryId,
    data,
  } = action.payload;

  const dictionaryIndex = state.findIndex(item => item.id === dictionaryId);
  const dictionary = state[dictionaryIndex];
  const entryIndex = dictionary.entries.findIndex(item => item.id === entryId);

  return update(state, {[dictionaryIndex]: {entries: {[entryIndex]: {$merge: data}}}});
}
