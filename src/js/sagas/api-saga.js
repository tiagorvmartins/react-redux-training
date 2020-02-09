import { DATA_REQUESTED, DATA_LOADED, API_ERRORED } from '../constants/action-types';
import { takeEvery, call, put } from "redux-saga/effects";

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga);  
}

function* workerSaga() {
  try {
    const data = yield call(getData);
    const message = "The data has has been loaded";
    yield put({ type: DATA_LOADED, payload : { data , message} });

  } catch (e) {      
    yield put({ type: API_ERRORED, payload: e.toString() });
    // const data = [];
    // const message = "Empty";
    // yield put({ type: DATA_LOADED, payload : { data , message} });
  }
}

function getData() {  
  return fetch("https://jsonplaceholderr.typicode.com/posts").then(response =>
    response.json()
  );
}

