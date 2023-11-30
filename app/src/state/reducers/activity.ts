import {
  ACTIVITY_LOCATION_SET, USER_CLICK_RECORD_MOOSE
} from '../actions';

import { AppConfig } from '../config';

class ActivityState {
  recordingMooseInProgress: boolean;
  location: any;

  constructor() {
    this.location = null;
    this.recordingMooseInProgress = false;
  }
}
const initialState = new ActivityState();

function createActivityReducer(configuration: AppConfig): (arg0: ActivityState, AnyAction: any) => ActivityState {
  return (state = initialState, action) => {
    switch (action.type) {
      case USER_CLICK_RECORD_MOOSE: {
        return {
          ...state,
          recordingMooseInProgress: true
        };
      }
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
