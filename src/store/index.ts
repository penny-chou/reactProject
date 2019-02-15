import { RouteProps } from "react-router";
import { combineReducers, AnyAction, Action } from "redux";
import { connectRouter } from "connected-react-router";
import { all, fork } from "redux-saga/effects";
import { History } from "history";
import { Dispatch } from "react";

// 设置home的状态
import { HomeState } from "./home/types";
import { homeReducer } from "./home/reducer";
import homeSaga from "./home/sagas";

// 图片状态管理
import { PicState } from "./picture/types";
import { picReducer } from "./picture/reducer";
import picSaga from "./picture/sagas";

// 获取关于我们的状态管理
import { AboutState } from "./about/types";
import { AboutReducer } from "./about/reducer";
import aboutSaga from "./about/sagas";

// 设置common这状态
import { MsModalState } from "./common/ms-modal/types";
import { msModalReducer } from "./common/ms-modal/reducer";

// 设置整个项目的state
export interface ApplicationState {
  // 路由
  router: RouteProps;

  // home的状态管理
  homeState: HomeState;

  // 设置图片的状态管理
  picState: PicState;

  // 关于我们的状态
  aboutState: AboutState;

  // common中的状态
  msModalState: MsModalState;
}

// 添加属性给react组件，此属性默认传递给connect（）方法
export interface ConnectedReduxProps<A extends Action = AnyAction>{
  dispatch: Dispatch<A>
}

// 当action被调度，redux根据名称去匹配reducer,然后更新相应的state
export const rootReducer = (history: History<any>) => combineReducers<ApplicationState>({
  // 路由
  router: connectRouter(history),

  // home
  homeState: homeReducer,

  // pic
  picState: picReducer,

  // about
  aboutState: AboutReducer,

  // 设置common中的状态map
  msModalState: msModalReducer
});

// 合并saga
export function* rootSaga() {
  yield all([
    fork(homeSaga),
    fork(picSaga),
    fork(aboutSaga)
  ])
}
