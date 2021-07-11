import { SET_LOCATION } from '../actions/routerActions';
import { setFilter } from '../actions/searchFilterActions';

function parse(qs: string) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  return chunks
    .filter((chunk) => {
      const [key, value] = chunk.split('=');
      if (key && value) {
        return true;
      }

      return false;
    })
    .map((chunk) => chunk.split('='))
    .reduce(
      (result, [key, value]) => ({
        ...result,
        [key]: value,
      }),
      {},
    );
}

export default (store: any) => (nextRunner: any) => (action: any) => {
  const { type, payload } = action;
  const result = nextRunner(action);

  if (type === SET_LOCATION) {
    const { pathname, search } = payload.location;
    if (pathname === '/') {
      store.dispatch(setFilter(parse(search)));
    }
  }

  return result;
};
