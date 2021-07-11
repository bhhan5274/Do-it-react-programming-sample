import { combineReducers } from 'redux';
import notificationReducers, { NotificationState } from './notificationReducers';
import searchFilterReducer, { SearchFilterState } from './searchFilterReducer';
import createReducer from './createReducer';
import routerReducer, { RouterState } from './routerReducer';

const apiReducers = createReducer('transactions', 'users');

export default combineReducers({
  ...apiReducers,
  notification: notificationReducers,
  searchFilter: searchFilterReducer,
  router: routerReducer,
});

export type State = {
  notification: NotificationState;
  searchFilter: SearchFilterState;
  router: RouterState;
};
