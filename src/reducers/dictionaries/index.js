import uuidV4 from 'uuid/v4';
import update from 'react-addons-update';

import initialState from './sample-data.json';
import {actionTypes} from './actions';


export default function todos(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CreateDictionary: {
      return [
        {
          id: uuidV4(),
          name: action.payload,
          entries: {}
        },
        ...state,
      ];
    }
    case actionTypes.DeleteDictionary: {
      const dictionaryIndex = state.findIndex(item => item.id === action.payload);

      return update(state, {$splice: [[dictionaryIndex, 1]]});
    }
    case actionTypes.CreateEntry: {
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
    case actionTypes.EditEntry: {
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
    case actionTypes.DeleteEntry: {
      const {
        entryId,
        dictionaryId,
      } = action.payload;

      const dictionaryIndex = state.findIndex(item => item.id === dictionaryId);
      const dictionary = state[dictionaryIndex];
      const entryIndex = dictionary.entries.findIndex(item => item.id === entryId);

      return update(state, {[dictionaryIndex]: {entries: {$splice: [[entryIndex, 1]]}}});
    }
    default:
      return state
  }
}
