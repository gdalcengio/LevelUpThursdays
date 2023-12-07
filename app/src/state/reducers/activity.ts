import {
  ACTIVITY_LOCATION_SET,
  USER_CLICK_ADD_MOOSE,
  USER_CLICK_RECORD_MOOSE,
} from "../actions";
import { ACTIVITY_UPDATE_MOOSE } from "../actions/index";

import { AppConfig } from "../config";

class ActivityState {
  recordingMooseInProgress: boolean;
  location: any;
  mooseArray: any[];

  constructor() {
    this.location = "";
    this.recordingMooseInProgress = false;
    this.mooseArray = [];
  }
}
const initialState = new ActivityState();

function createActivityReducer(
  configuration: AppConfig
): (arg0: ActivityState, AnyAction: any) => ActivityState {
  return (state = initialState, action) => {
    switch (action.type) {
      case USER_CLICK_ADD_MOOSE: {
        return {
          ...state,
          mooseArray: [...state.mooseArray, { id: Math.random() }],
        };
      }
      case USER_CLICK_RECORD_MOOSE: {
        return {
          ...state,
          recordingMooseInProgress: true,
        };
      }
      case ACTIVITY_LOCATION_SET: {
        return {
          ...state,
          location: action.payload.location,
        };
      }
      case ACTIVITY_UPDATE_MOOSE: {
        const id = action.payload?.id;
        const meese = state.mooseArray;
        const mooseIndex = meese.findIndex((moose) => {
          return moose.id === id;
        });
        if (mooseIndex === -1) return { ...state };

        const updatedMoose = {
          id: meese[mooseIndex].id,
          age: action.payload.age ? action.payload.age : meese[mooseIndex].age,
        };

        meese[mooseIndex] = updatedMoose;

        return {
          ...state,
          mooseArray: meese,
        };
      }
      default:
        return state;
    }
  };
}

const selectActivity: (state: any) => ActivityState = (state) =>
  state.ActivityPage;

export { createActivityReducer, selectActivity };
