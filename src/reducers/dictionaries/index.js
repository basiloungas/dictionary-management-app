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
    case actionTypes.CreateEntry: {
      const {
        dictionaryId,
        domain,
        range,
      } = action.payload;

      const dictionaryIndex = state.findIndex(item => item.id === dictionaryId);
      const dictionary = state[dictionaryIndex];
      const updatedDictionary = {
        ...dictionary,
        entries: {
          [domain]: range,
          ...dictionary.entries,
        }
      };

      return update(state, {$splice: [[dictionaryIndex, 1, updatedDictionary]]});
    }
    case actionTypes.DeleteEntry: {
      const {
        dictionaryId,
        domain,
      } = action.payload;

      const dictionaryIndex = state.findIndex(item => item.id === dictionaryId);
      const dictionary = state[dictionaryIndex];

      const newEntries = {
        ...dictionary.entries,
      };
      delete newEntries[domain];

      const updatedDictionary = {
        ...dictionary,
        entries: newEntries,
      };

      return update(state, {$splice: [[dictionaryIndex, 1, updatedDictionary]]});
    }
    default:
      return state
  }
}
