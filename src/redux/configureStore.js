import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';

// modules
import User from './modules/user';
import Content from './modules/content';
import Comment from './modules/comment';
import Image from './modules/image';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: User,
  content: Content,
  comment: Comment,
  image: Image,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history })];

const env = process.env.NODE_ENV;
if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = initialStore => createStore(rootReducer, enhancer);

export default store();
