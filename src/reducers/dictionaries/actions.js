export const CreateDictionary = 'CREATE_DICTIONARY';
export const CreateEntry = 'CREATE_ENTRY';
export const DeleteEntry = 'DELETE_ENTRY';

export const actionTypes = {
  CreateDictionary,
  CreateEntry,
  DeleteEntry,
};

export const createDictionary = (data) => ({
  type: actionTypes.CreateDictionary,
  payload: data,
});

export const createEntry = (data) => ({
  type: actionTypes.CreateEntry,
  payload: data,
});

export const deleteEntry = (data) => ({
  type: actionTypes.DeleteEntry,
  payload: data,
});
