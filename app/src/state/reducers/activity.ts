import {
  ACTIVITY_LOCATION_SET
} from '../actions';

import { AppConfig } from '../config';

class ActivityState {
  location: any;

  constructor() {
    location: null;
  }
}
const initialState = new ActivityState();

function createActivityReducer(configuration: AppConfig): (arg0: ActivityState, AnyAction: any) => ActivityState {
  return (state = initialState, action) => {
    switch (action.type) {
      case ACTIVITY_LOCATION_SET: {
        return {
          ...state,
          location: action.payload.location
        };
      }
      default:
        return state;
    }
  };
}

const selectActivity: (state: any) => ActivityState = (state) => state.ActivityPage;

export { createActivityReducer, selectActivity };
