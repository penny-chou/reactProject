import React from "react";
import { HomeInfo } from "src/store/home/types";
import { fetchHomeInfo } from "src/store/home/actions";
import { ApplicationState } from "src/store";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Layout, Breadcrumb } from "antd";
import { Route, Redirect, Switch } from "react-router";
import { RouteComponentProps } from "react-router-dom";

import HeaderTop from "./header/Header";
import SiderLeft from "./sider/Sider";
import About from "../about/About";
import Contact from "../contact/Contact";
import HomePage from "../first/First";
import SalaryAccount from "../salary/salary-account/SalaryAccount";
import SalaryPay from "../salary/salary-pay/SalaryPay";

/**
 * propsFromState
 *
 * @interface PropsFromState
 */
interface PropsFromState {
  homeInfo: HomeInfo;
}

/**
 * PropsFromDispatch
 *
 * @interface PropsFromDispatch
 */
interface PropsFromDispatch {
  fetchHomeInfo: typeof fetchHomeInfo;
}

// 合并props
type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps;
/**
 * Home
 *
 * @class Home
 * @extends {React.Component}
 */
class Home extends React.Component<AllProps> {
  // 数据渲染
  public componentDidMount() {
    this.props.fetchHomeInfo();
  }

  // 渲染
  public render() {
    const menuList: any = [
      {
        key: "0",
        title: "用户管理",
        path: "user",
        pageList: [{
          code: "0",
          text: "首页",
          link: "/user/home",
        },{
          code: "1",
          text: "关于我们",
          link: "/user/about"
        }, {
          code: "2",
          text: "联系我们",
          link: "/user/contact"
        }]
      }, {
        key: "1",
        title: "薪资管理",
        path: "salary",
        pageList: [{
          code: "3",
          text: "工资专户",
          link: "/salary/account",
        },{
          code: "4",
          text: "薪资发放",
          link: "/salary/pay"
        }]
      }];

    return <div style={{ height: "100%" }}>
      <Layout style={{ height: "100%", minWidth: 1366, minHeight: 500 }}>
        <HeaderTop />
        <Layout>
          <SiderLeft menuList={ menuList } title="侧边栏"/>
          <Layout style={{ margin: "16px" }}>
            <Layout.Content style={ { padding: "16px", backgroundColor: "#fff", overflow: "initial"} } id="scroll">
                {
                  this.props.history.location.pathname ? <Breadcrumb separator=">" style={{ fontSize: "20px" }}>
                    <Breadcrumb.Item key="0" href={ "/" + this.props.history.location.pathname.split("/")[1] }>
                      { 
                        menuList.map((item: any) => 
                          {
                            if(item.path === this.props.history.location.pathname.split("/")[1]) {
                              return item.title
                            } else {
                              return ""
                            }
                          }
                        )
                      }
                    </Breadcrumb.Item>
                    <Breadcrumb.Item key="1">
                      { 
                        menuList.map((item: any) => 
                          item.pageList.map((page: any) => {
                            if (page.link === this.props.history.location.pathname) {
                              return page.text
                            } else {
                              return ""
                            }
                          })
                        )
                      }
                    </Breadcrumb.Item>
                  </Breadcrumb> : null
                }
              <Switch>
                <Route path={ `/user/home` } component={ HomePage } />
                <Route path={ `/user/about` } component={ About } />
                <Route path={ `/user/contact` } component={ Contact } /> 
                <Route path={ `/salary/account` } component={ SalaryAccount } />
                <Route path={ `/salary/pay` } component={ SalaryPay } />
                <Redirect to={ `/user/home` }/>
              </Switch>
            </Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  }
}

// mapStateToProps
const mapStateToProps = ({ homeState }: ApplicationState) => ({
  homeInfo: homeState.homeInfo
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchHomeInfo: () => dispatch(fetchHomeInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// 冒泡排序
    // const array = [3,5,1,3,4,6,7,4,2];
    // for(let i = array.length;i > 0; i--) {
    //   for(let j=0; j < i-1; j++){
    //     if(array[j] > array[j+1]) {
    //       const temp = array[j];
    //       array[j] = array[j+1];
    //       array[j+1] = temp;
    //     }
    //   }
    // }
    
    // console.log(array);
    // 选择排序
    // for(let i = 0; i < array.length-1; i++) {
    //   let min = array[i];
    //   for(let j = i+1;j < array.length; j++) {
    //     if (array[j] < min) {
    //       min = array[j];
    //       array[j] = array[i];
    //       if (i !== j) {
    //         array[i] = min;
    //       }
    //     }
    //   }
    // }
    // console.log(array);
    // const array = [3,5,1,3,4,6,7,4,2];
    // 直接插入排序
    // const arrO = [3];
    // let flag = false;
    // for(let i = 1;i < array.length; i++) {
    //   for(let j = 0; j < i; j++) {
    //     if(array[i] < arrO[j]) {
    //       arrO.splice(j, 0, array[i]);
    //       flag = true;
    //       break;
    //     }
    //   }
    //   if(!flag) {
    //     arrO.push(array[i]);
    //   }
    //   flag = false;
    // }
    // console.log(arrO);