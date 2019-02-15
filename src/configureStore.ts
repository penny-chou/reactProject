import { composeWithDevTools } from "redux-devtools-extension";
import { Store, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import { ApplicationState, rootReducer, rootSaga,  } from "./store";
import { History } from "history";
import { routerMiddleware } from "connected-react-router";
/**
 * store配置
 * store是用来联系我们的action,reducer, saga
 *
 * @export
 * @param {History} history
 * @param {ApplicationState} initialState
 * @returns {Store<ApplicationState>}
 */
export default function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  // 创建devTools实例
  const composeEnhancers = composeWithDevTools({});
  // 创建redux-saga实例
  const sagaMiddleware = createSagaMiddleware();
  // 创建logger
  const logger = createLogger({
    predicate: () => !(process.env.NODE_ENV === "production")
  });

  // 创建store，传递组合后的reducer和saga，以及初始state
  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware, logger))
  );

  // 启动saga
  sagaMiddleware.run(rootSaga);

  // 返回store
  return store;
}

