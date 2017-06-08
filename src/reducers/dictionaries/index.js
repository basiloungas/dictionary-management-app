import initialState from './sample-data.json';
import {actionTypes} from './actions';
import reducers from './reducers';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CreateDictionary: {
      return reducers.CreateDictionaryReducer(state, action);
    }
    case actionTypes.DeleteDictionary: {
      return reducers.DeleteDictionaryReducer(state, action);
    }
    case actionTypes.ValidateDictionary: {
      return reducers.ValidateDictionaryReducer(state, action);
    }
    case actionTypes.CreateEntry: {
      return reducers.CreateEntryReducer(state, action);
    }
    case actionTypes.EditEntry: {
      return reducers.EditEntryReducer(state, action);
    }
    case actionTypes.DeleteEntry: {
      return reducers.DeleteEntryReducer(state, action);
    }
    default:
      return state
  }
}
