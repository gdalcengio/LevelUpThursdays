import { channel } from "redux-saga";
import {
  all,
  put,
  call,
  take,
  takeEvery
} from "redux-saga/effects";
import {
  ACTIVITY_LOCATION_SET,
  USER_SAVE_SIGHTINGS,
  GET_GEOLOCATION,
  ACTIVITY_CLEAR_MOOSE_ARRAY,
} from "../actions";

function* handle_USER_CLICK_RECORD_MOOSE (action: any) {
  yield put({ type: ACTIVITY_LOCATION_SET, payload: location });
}


function* getGeoLocation(action: any) {
 const coordChannel = channel();

  console.log("in the get geo function");
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos: any) {
    console.log("in the success function");
    const crd = pos.coords;
    console.dir(crd);
    coordChannel.put({
      type: ACTIVITY_LOCATION_SET,
      payload: { latitude: crd.latitude, longitude: crd.longitude },
    });
  }

  function error(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);



  while(true) {
    const action: any = yield take(coordChannel);
    yield put(action);
    return;
  }
}


function* mooseSightingSaga() {
  yield all([
    takeEvery(GET_GEOLOCATION, getGeoLocation),
    takeEvery(USER_SAVE_SIGHTINGS, handle_USER_SAVE_SIGHTINGS),
  ]);
}

function* handleSaveMeese(action: any) {
  const { mooseArray, location } = action;
  let storedSightings = JSON.parse(localStorage.getItem("Sightings")) || [];
  const newSighting: object = {
        id: crypto.randomUUID(),
        status: 'synced',
        syncDate: Date.now(),
        dateOfSighting: Date.now(),
        location: location,
        mooseArray: mooseArray,
      };
  storedSightings.push(newSighting);
  localStorage.setItem("Sightings", JSON.stringify(storedSightings));
  yield put({ type: ACTIVITY_CLEAR_MOOSE_ARRAY });
}

function* handle_USER_SAVE_SIGHTINGS(action: any) {
  yield call(handleSaveMeese, action.payload);
}

export default mooseSightingSaga;
