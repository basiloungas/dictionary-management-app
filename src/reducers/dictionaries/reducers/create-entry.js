import update from 'react-addons-update';
import uuidV4 from 'uuid/v4';

export default (state, action) => {
  const {
    dictionaryId,
    data,
  } = action.payload;

  const dictionaryIndex = state.findIndex(item => item.id === dictionaryId);
  const dictionary = state[dictionaryIndex];
  const updatedDictionary = {
    ...dictionary,
    entries: [
      {
        id: uuidV4(),
        ...data,
      },
      ...dictionary.entries,
    ]
  };

  return update(state, {$splice: [[dictionaryIndex, 1, updatedDictionary]]});
}
