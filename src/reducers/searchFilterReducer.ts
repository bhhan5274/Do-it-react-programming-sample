import { SET_FILTER } from '../actions/searchFilterActions';

export type SearchFilterState = Readonly<{
  params: any;
}>;

const initState = {
  params: {},
};

export default (state = initState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FILTER: {
      const { params } = payload;
      return { ...state, params };
    }
    default:
      return state;
  }
};
