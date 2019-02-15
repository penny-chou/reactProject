import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { Store } from "redux";
import { History } from "history";
import { ApplicationState } from "./store";
import './App.scss';
import Home from "./components/layout/Home";


// 组件props声明
interface AppProps {
  store: Store<ApplicationState>,
  history: History
}

/**
 * 根组件
 * 1、使用Provider提供redux state
 * 2、ConnectedRouter连接redux和router
 * 3、LocaleProvider提供antd中文设置
 * 4、加载Home组件
 *
 * @class App
 * @extends {React.Component<AppProps>}
 */
class App extends React.Component<AppProps> {
  public render() {
    // 从props中获取history,store
    const { history, store } = this.props;
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <Switch>
            <Route path="/" component={ Home } />
            <Redirect to="/" />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
