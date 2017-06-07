export const CreateDictionary = 'CREATE_DICTIONARY';
export const CreateEntry = 'CREATE_ENTRY';

export const actionTypes = {
  CreateDictionary,
  CreateEntry,
};

export const createDictionary = (data) => ({
  type: actionTypes.CreateDictionary,
  payload: data,
});

export const createEntry = (data) => ({
  type: actionTypes.CreateEntry,
  payload: data,
});
