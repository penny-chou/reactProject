import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory, createHashHistory } from "history";
import { supportsHistory } from "history/DOMUtils"
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import configureStore from "./configureStore";

// 创建browser history对象，router和redux连接必须传递
const history = supportsHistory() ? createBrowserHistory() : createHashHistory();
// 从window对象中获取初始state
const initialState = (window as any).initialReduxState;
// 配置store
const store = configureStore(history, initialState);

ReactDOM.render(
  <App store={ store } history={ history }/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

