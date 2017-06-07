export const CreateDictionary = 'CREATE_DICTIONARY';

export const actionTypes = {
  CreateDictionary
};

export const createDictionary = (data) => ({
  type: actionTypes.CreateDictionary,
  payload: data,
});
