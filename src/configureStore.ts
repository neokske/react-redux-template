import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootReducer } from './types';

const configureStoreDev = (rootReducer: RootReducer, middleware: Middleware[]) =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

const configureStoreProd = (rootReducer: RootReducer, middleware: Middleware[]) =>
  createStore(rootReducer, compose(applyMiddleware(...middleware)));

const configureStore =
  process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
