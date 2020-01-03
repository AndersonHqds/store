import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(reducers, enhancer(applyMiddleware(...middlewares)));
};
