export const SET_FILTER = 'searchFilter/SET_FILTER';

export const setFilter = (params: any) => {
  return {
    type: SET_FILTER,
    payload: { params },
  };
};
