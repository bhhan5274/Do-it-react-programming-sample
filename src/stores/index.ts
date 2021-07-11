import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import rootReducer from '../reducers';
import notificationEffects from '../middlewares/notificationEffects';
import searchFilterEffects from '../middlewares/searchFilterEffects';
import routerEffects from '../middlewares/routerEffects';

export default (): any =>
  createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk, reduxPackMiddleware, notificationEffects, searchFilterEffects, routerEffects),
    ),
  );
