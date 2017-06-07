import uuidV4 from 'uuid/v4';

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
    default:
      return state
  }
}
