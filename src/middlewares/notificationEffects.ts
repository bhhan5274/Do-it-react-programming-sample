import { KEY, LIFECYCLE } from 'redux-pack';
import { notificationActions, SHOW_NOTIFICATION } from '../actions/notificationActions';
import { debounce } from '../constants/utils';

const debounceRunner = debounce((action: any) => action(), 4000);

export default (store: any) =>
  (nextRunner: any) =>
  (action: any): any => {
    const { type, payload, meta } = action;
    const result = nextRunner(action);

    if (meta && meta.notification) {
      const { success, error } = meta.notification;
      if (success && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
        store.dispatch(notificationActions.showMessage(success));
      } else if (error && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
        const { errorMessage } = payload.response ? payload.response.data : { errorMessage: 'Error' };
        store.dispatch(notificationActions.showMessage(error || errorMessage, true));
      }
    } else if (type === SHOW_NOTIFICATION) {
      const hide = () => store.dispatch(notificationActions.hideMessage());
      debounceRunner(hide);
    }

    return result;
  };
