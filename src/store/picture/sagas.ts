import { fetchPic, fetchPicSuccess, fetchPicError } from "./actions";
import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import fetchApi from "src/utils/fetchApi";
import { PicActionTypes } from "./types";

/**
 * 生成器函数在执行时能暂停，后面又能从暂停处继续执行。
 * 调用一个生成器函数并不会马上执行它里面的语句，而是返回一个这个生成器的 迭代器 （iterator ）对象。
 * 当这个迭代器的 next() 方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现yield的位置为止，
 * yield 后紧跟迭代器要返回的值。或者如果用的是 yield*（多了个星号），
 * 则表示将执行权移交给另一个生成器函数（当前生成器暂停执行）。
 * @param action 
 */
function* handleFetchPic(action: ReturnType<typeof fetchPic>) {
  try{
    const res = yield call(fetchApi, "get", "/mock-data/pic.json");
    if(res.result === 0) {
      yield put(fetchPicSuccess(res.data));
    } else {
      yield put(fetchPicError(res.data));
    }
  } catch (err){
    if(err instanceof Error) {
      yield put(fetchPicError(err.stack!));
    } else {
      yield put(fetchPicError("出错了"));
    }
  }
}

// 监听
function* watchFetch() {
  yield takeEvery(PicActionTypes.FETCH_PIC, handleFetchPic);
}

// 合并
function* picSaga() {
  yield all([fork(watchFetch)]);
}

export default picSaga;
