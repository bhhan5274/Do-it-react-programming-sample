import { SET_FILTER } from '../actions/searchFilterActions';
import { transactionActions } from '../actions/transactionActions';

export default (store: any) => (nextRunner: any) => (action: any) => {
  const { type, payload } = action;
  const result = nextRunner(action);

  if (type === SET_FILTER) {
    const { params } = payload || {};
    store.dispatch(transactionActions.resetTransactionList());
    store.dispatch(transactionActions.requestTransactionListFromReduxPack(params));
  }

  return result;
};
