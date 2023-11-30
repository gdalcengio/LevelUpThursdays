import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createRootReducer } from './reducers';

import { createLogger } from 'redux-logger';
import { AppConfig } from './config';
import activityPageSaga from './sagas/activity';

const setupStore = (configuration: AppConfig) => {
  const logger = createLogger({
    collapsed: true
  });
  let middlewares;

  const sagaMiddleware = createSagaMiddleware({
    onError: async (e, errorInfo) => {
    }
  });

  let store;
  if (configuration.DEBUG) {
    store = createStore(createRootReducer(configuration), applyMiddleware(sagaMiddleware, logger));
  } else {
    store = createStore(createRootReducer(configuration), applyMiddleware(sagaMiddleware));
  }

  sagaMiddleware.run(activityPageSaga);


  return store;
};

export { setupStore };
