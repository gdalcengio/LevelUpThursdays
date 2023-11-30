import { all, delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { selectActivity } from 'state/reducers/activity';
import { ACTIVITY_LOCATION_SET } from '../actions';

function* activityPageSaga() {
  yield all([
    takeEvery(ACTIVITY_LOCATION_SET, () => console.log('ACTIVITY_DELETE_REQUEST'))
  ]);
}

export default activityPageSaga;
