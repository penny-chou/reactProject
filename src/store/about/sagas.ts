import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { AboutActionsTypes } from "./types";
import fetchApi from "src/utils/fetchApi";
import { fetchAboutUsList, fetchAboutUsListError, fetchAboutUsListSuccess } from "./actions";

// 获取用户信息
function* handleFetchAboutList(action: ReturnType<typeof fetchAboutUsList>) {
  try {
    const res = yield call(fetchApi, "get", "/mock-data/homeInfo.json");
    if (res.result === 0) {
      yield put(fetchAboutUsListSuccess(res.data));
    } else {
      yield put(fetchAboutUsListError(res.detail));
    }
  } catch(err) {
    if (err instanceof Error) {
      yield put(fetchAboutUsListError(err.stack!));
    } else {
      yield put(fetchAboutUsListError("出错了!"));
    }
  }
}

// 监听事件
function* watchFetch() {
  yield takeEvery(AboutActionsTypes.FETCH_ABOUT_US_LIST, handleFetchAboutList);
}

// 合并sagas
function* aboutSaga() {
  yield all([fork(watchFetch)])
}

export default aboutSaga;
