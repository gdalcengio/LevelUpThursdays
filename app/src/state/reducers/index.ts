import { combineReducers } from 'redux';

import { AppConfig } from '../config';

import { createConfigurationReducerWithDefaultState } from './configuration';
import { createActivityReducer } from './activity';

function createRootReducer(config: AppConfig) {
  return combineReducers({
    Configuration: createConfigurationReducerWithDefaultState(config),
    Activity: createActivityReducer(config)
  });
}

export { createRootReducer };

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
