import React from "react";
import { Layout, Dropdown, Menu } from "antd";
import "./logo.scss";

class HeaderTop extends React.Component {
  public render() {
    return (<div className="layout">
      {/* style={ {width: "100", height: "100"} } */}
      <Layout.Header style={{ background:"#fff" }}>
        <div>微知</div>
      </Layout.Header>
      <Dropdown overlay={ 
        <Menu>
          <Menu.Item key="1">
            <a href="javascript:;">退出</a>
          </Menu.Item>
        </Menu>
      }>
      {/* 放置用户登录后的姓名和logo */}
      <div className="user" style={ {color: "#000"} }>周玉</div>
      </Dropdown>
    </div>);
  }
}

export default HeaderTop;
