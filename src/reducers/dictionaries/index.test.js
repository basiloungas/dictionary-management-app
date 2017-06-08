import reducer from './index';
import {
  createDictionary,
  deleteDictionary,
} from './actions';

describe('Reducers > Dictionaries', () => {
  describe('CreateDictionary', () => {
    test('adds new dictionary on top', () => {
      const action = createDictionary('new Dictionary name');
      const result = reducer(undefined, action);

      expect(result).toHaveLength(2);
      expect(result[0].name).toEqual('new Dictionary name');
      expect(result[0].entries).toEqual({});
    })
  });

  describe('DeleteDictionary', () => {
    test('deletes new dictionary', () => {
      const action = deleteDictionary('1');
      const result = reducer(undefined, action);

      expect(result).toHaveLength(0);
    })
  });
});
