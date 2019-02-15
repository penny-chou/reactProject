import React from "react";
import MsTime from "../common/ms-time/MsTime";

/**
 * 倒计时
 *
 * @class Contact
 * @extends {React.Component}
 */
class Contact extends React.Component {
  /**
   * 构造函数
   * Creates an instance of Contact.
   * @param {*} props
   * @memberof Contact
   */
  constructor(props: any) {
    super(props);
  }

  /**
   * 页面渲染
   *
   * @returns
   * @memberof Contact
   */
  public render() {
    return (<div>
      <MsTime />
    </div>);
  }
}

export default Contact;
