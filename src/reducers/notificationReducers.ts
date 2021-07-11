import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  NotificationActions,
  ShowMessageAction,
} from '../actions/notificationActions';

export type NotificationState = Readonly<{
  message?: string;
  warning?: boolean;
  showMessage?: boolean;
}>;

const initialState: NotificationState = {
  message: '',
  warning: false,
  showMessage: false,
};

export default (state = initialState, action: NotificationActions): NotificationState => {
  switch (action.type) {
    case SHOW_NOTIFICATION: {
      const { message, warning } = (action as ShowMessageAction).payload;

      return {
        ...state,
        showMessage: true,
        message,
        warning,
      };
    }

    case HIDE_NOTIFICATION: {
      return {
        ...state,
        message: '',
        showMessage: false,
      };
    }

    default:
      return state;
  }
};
