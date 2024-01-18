import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createRootReducer } from './reducers';

import { createLogger } from 'redux-logger';
import { AppConfig } from './config';
import mooseSightingSaga from './sagas/mooseSightingsSaga';

const setupStore = (configuration: AppConfig) => {
  const logger = createLogger({
    logErrors: true,
    collapsed: true,
    diff: true
  });
  let middlewares;

  const sagaMiddleware = createSagaMiddleware();

  let store;
  if (configuration.DEBUG) {
    store = createStore(createRootReducer(configuration), applyMiddleware(sagaMiddleware, logger));
  } else {
    store = createStore(createRootReducer(configuration), applyMiddleware(sagaMiddleware));
  }

  sagaMiddleware.run(mooseSightingSaga);


  return store;
};

export { setupStore };
