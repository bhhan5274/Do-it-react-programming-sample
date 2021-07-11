import { SET_LOCATION } from '../actions/routerActions';

export type RouterState = Readonly<{
  location: any;
}>;

const initState = {
  location: {},
};

const routerReducer = (state = initState, action: any): RouterState => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOCATION: {
      const { location } = payload;
      return { ...state, location };
    }
    default:
      return state;
  }
};

export default routerReducer;
