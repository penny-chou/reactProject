import React from "react";
import MsTable from "../common/ms-table/MsTable";
import { AboutUsInfo } from "src/store/about/types";
import { fetchAboutUsList } from "src/store/about/actions";
import { ApplicationState } from "src/store";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { fetchMsModalVisible } from "src/store/common/ms-modal/actions";
import MsModal from "../common/ms-modal/MsModal";
import { Input, Form } from "antd";

// PropsFromState
interface PropsFromState {
  aboutUsList: AboutUsInfo[];
  modalVisible: boolean;
}

// PropsFromDispatch
interface PropsFromDispatch {
  fetchAboutUsList: typeof fetchAboutUsList;
  fetchMsModalVisible: typeof fetchMsModalVisible;
}

// 合并props
type AllProps = PropsFromState & PropsFromDispatch;

/**
 * 关于我们
 *
 * @class About
 * @extends {React.Component}
 */
class About extends React.Component<AllProps> {
  /**
   * 数据获取
   *
   * @memberof About
   */
  public componentDidMount() {
    this.props.fetchAboutUsList();
  }

  /**
   * 编辑
   *
   * @memberof About
   */
  public onEdit = () => {
    this.props.fetchMsModalVisible(true);
  }
  
  /**
   * 保存联系人信息
   *
   * @memberof About
   */
  public onSaveInfo = () => {
    this.props.fetchMsModalVisible(false);
  }

  /**
   * 关闭弹窗
   *
   * @memberof About
   */
  public onCloseModal = () => {
    this.props.fetchMsModalVisible(false);
  }

  /**
   * 页面渲染
   *
   * @returns
   * @memberof About
   */
  public render() {
    const getRowKey = (record: any, index: number) => index.toString();
    const formItemLayout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };

    // 定义表头
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
        width: 200
      }, {
        title: "年龄",
        dataIndex: "age",
        key: "age",
        width: 200
      }, {
        title: "电话",
        dataIndex: "tel",
        key: "tel",
        width: 200
      }, {
        title: "身份证号",
        dataIndex: "card",
        key: "card",
        width: 200
      }, {
        title: "操作",
        width: 200,
        key: "handle",
        render: (record: any) => (
          <span>
            <a href="javascript:void(0);" onClick={ this.onEdit }>编辑</a>
          </span>
        )
    }];
    return (<div>
      <MsTable
        rowKey={ getRowKey }
        columns={ columns }
        dataSource={ this.props.aboutUsList }
      />
      {
        this.props.modalVisible ? 
        <MsModal
          title="编辑用户信息"
          visible={ this.props.modalVisible }
          onOk={ this.onSaveInfo }
          onCancel={ this.onCloseModal }
        >
          <Form>
            <Form.Item label="姓名" { ...formItemLayout }>
              <Input />
            </Form.Item>
            <Form.Item label="年龄" { ...formItemLayout }>
              <Input />
            </Form.Item>
            <Form.Item label="电话" { ...formItemLayout }>
              <Input />
            </Form.Item>
            <Form.Item label="身份证号" { ...formItemLayout }>
              <Input />
            </Form.Item>
          </Form>
        </MsModal> : null
      }
    </div>);
  }
}

// mapStateToProps
const mapStateToProps = ({ aboutState, msModalState }: ApplicationState) => ({
  aboutUsList: aboutState.aboutUsList,
  modalVisible: msModalState.modalVisible
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchAboutUsList: () => dispatch(fetchAboutUsList()),
  fetchMsModalVisible: (visible: boolean) => dispatch(fetchMsModalVisible(visible))
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
