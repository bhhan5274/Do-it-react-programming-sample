export const SHOW_NOTIFICATION = 'notification/SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'notification/HIDE_NOTIFICATION';

export const notificationActions = {
  showMessage: (message: string, warning = false) => {
    return {
      type: SHOW_NOTIFICATION,
      payload: { message, warning },
    };
  },
  hideMessage: () => {
    return {
      type: HIDE_NOTIFICATION,
    };
  },
};

export type ShowMessageAction = ReturnType<typeof notificationActions.showMessage>;
export type HideMessageAction = ReturnType<typeof notificationActions.hideMessage>;

export type NotificationActions = ShowMessageAction | HideMessageAction;
