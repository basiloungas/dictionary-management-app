import uuidV4 from 'uuid/v4';

export default (state, action) => {
  return [
    {
      id: uuidV4(),
      name: action.payload,
      entries: {}
    },
    ...state,
  ];
}
