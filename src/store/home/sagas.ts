import { put, takeEvery, all, fork, call } from "redux-saga/effects";
import { fetchHomeInfo, fetchHomeInfoSuccess, fetchHomeInfoError } from "./actions";
import { HomeActionTypes } from "./types";
import fetchApi from "src/utils/fetchApi";

// saga页面,执行reducer中复杂的操作

function* handleFetchHomeInfo(action: ReturnType<typeof fetchHomeInfo>) {
  try{
    const res = yield call(fetchApi, "get", "/mock-data/homeInfo.json");
    if (res.result === 0) {
      yield put(fetchHomeInfoSuccess(res.data));
    } else {
      yield put(fetchHomeInfoError(res.detail));
    }
  } catch(err) {
    if (err instanceof Error) {
      yield put(fetchHomeInfoError(err.stack!));
    } else {
      yield put(fetchHomeInfoError("出错了"));
    }
  }
}

// 监听
function* watchFetch() {
  yield takeEvery(HomeActionTypes.FETCH_HOME_INFO, handleFetchHomeInfo);
}

// 合并saga
function* homeSaga() {
  yield all([fork(watchFetch)]);
}

export default homeSaga;
