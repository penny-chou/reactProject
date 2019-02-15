import React from "react";
import { Modal } from "antd";

interface MsModalProps<T> {
  title: string;
  visible: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}
/**
 * MsModal
 *
 * @class MsModal
 * @extends {React.Component}
 */
class MsModal extends React.Component<MsModalProps<any>> {
  /**
   * 构造函数
   * Creates an instance of MsModal.
   * @param {MsModalProps<any>} props
   * @memberof MsModal
   */
  constructor(props: MsModalProps<any>) {
    super(props);
  }
  public render() {
    return (<div>
      <Modal
        { ...this.props }
        okText="确定"
        cancelText="取消"
      />
    </div>);
  }
}

export default MsModal;
