import React from "react";
import { Button } from "antd";

/**
 * state
 *
 * @interface StateOwn
 */
interface StateOwn {
  time: number
}

/**
 * 倒计时
 *
 * @class MsTime
 * @extends {React.Component}
 */
class MsTime extends React.Component<{}, StateOwn> {
  /**
   * 构造函数
   * @param {*} props
   * @memberof MsTime
   */
  constructor(props: any) {
    super(props);
    
    this.state = {
      time: 60
    }
  }

  /**
   * 点击变时
   *
   * @memberof MsTime
   */
  public onTime = () => {
    const id = setInterval(() => {
      if (this.state.time !== 0) {
        this.setState({
          time: this.state.time - 1
        })
      } else {
        clearInterval(id);
      }
    }, 1000);
  }

  /**
   * 渲染页面
   *
   * @memberof MsTime
   */
  public render() {
    return (<div>
      <Button type="primary" onClick={ this.onTime }>
        { this.state.time ? "倒计时" + this.state.time + "秒" : null }
      </Button>
    </div>)
  }

}

export default MsTime;