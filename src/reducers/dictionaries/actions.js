export const CreateDictionary = 'CREATE_DICTIONARY';
export const DeleteDictionary = 'DELETE_DICTIONARY';
export const CreateEntry = 'CREATE_ENTRY';
export const DeleteEntry = 'DELETE_ENTRY';
export const EditEntry = 'EDIT_ENTRY';

export const actionTypes = {
  CreateDictionary,
  DeleteDictionary,
  CreateEntry,
  DeleteEntry,
  EditEntry,
};

export const createDictionary = (data) => ({
  type: actionTypes.CreateDictionary,
  payload: data,
});

export const deleteDictionary = (data) => ({
  type: actionTypes.DeleteDictionary,
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

export const editEntry = (data) => ({
  type: actionTypes.EditEntry,
  payload: data,
});
