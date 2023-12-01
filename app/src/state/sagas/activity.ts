import { all, delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { selectActivity } from 'state/reducers/activity';
import { ACTIVITY_LOCATION_SET, USER_CLICK_RECORD_MOOSE } from '../actions';


function* handle_USER_CLICK_RECORD_MOOSE(action: any) {
  yield put({type: ACTIVITY_LOCATION_SET, payload: location});
}

function* activityPageSaga() {
  yield all([
    //takeEvery(USER_CLICK_RECORD_MOOSE, handle_USER_CLICK_RECORD_MOOSE)
  ]);
}

export default activityPageSaga;
