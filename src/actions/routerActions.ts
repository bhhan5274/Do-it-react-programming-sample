export const SET_LOCATION = 'router/SET_LOCATION';

export const setLocation = (location: string) => {
  return {
    type: SET_LOCATION,
    payload: { location },
  };
};
