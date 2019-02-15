import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";

const { Sider } = Layout;

// PropsOwn
interface PropsOwn {
  title?: string;
  menuList?: [];
}

// AllProps
type AllProps = PropsOwn;

// 自定义状态
interface StateOwn {
  collapsed: boolean;
}

/**
 * sider
 *
 * @class SiderLeft
 * @extends {React.Component}
 */
class SiderLeft extends React.Component<AllProps,StateOwn> {
  constructor (props: AllProps){
    super(props);
    this.state = {
      collapsed: false
    }
  }

  /**
   * 点击/关闭侧边栏
   *
   * @memberof SiderLeft
   */
  public onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  /**
   * 渲染
   *
   * @returns
   * @memberof SiderLeft
   */
  public render() {
    return (
      <Sider
        collapsible={ true }
        onCollapse={ this.onCollapse }
        collapsed={ this.state.collapsed }
        className="mySider"
      >
        {/* <div style={{ height: "48px", color: "#fff", lineHeight: "48px", marginLeft: "30px", fontSize: "18px", fontFamily: "微软雅黑" }}>信息</div> */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['0']}
          style={{ height: "100%" }}
          className="myMenu"
        >
          {
            this.props.menuList ? 
            this.props.menuList.map((item: any) => 
              <SubMenu key={ item.key } title={ <span>{ item.title }</span> }>
                {
                  item.pageList ? 
                    item.pageList.map((page: any) => 
                      <Menu.Item key={ page.code } className="menuItem">
                        <Link to={ page.link } key={ page.code }>{ page.text }</Link>
                      </Menu.Item>
                    ) : null
                }
              </SubMenu>
            ) : null
          }
        </Menu>
      </Sider>
    )
  }
}

export default SiderLeft;