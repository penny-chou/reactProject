import React from "react";
import { Button, Card } from "antd";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { fetchPic, fetchPicVisible } from "src/store/picture/actions";
import { PicInfo } from "src/store/picture/types";
import { ApplicationState } from "src/store";

/**
 * PropsFromState
 *
 * @interface PropsFromState
 */
interface PropsFromState {
  picList: PicInfo[];
  picVisible: boolean;
}

/**
 * PropsFromDispatch
 *
 * @interface PropsFromDispatch
 */
interface PropsFromDispatch {
  fetchPic: typeof fetchPic;
  fetchPicVisible: typeof fetchPicVisible;
}

// 合并props
type AllProps = PropsFromState & PropsFromDispatch;

/**
 * 首页
 *
 * @class HomePage
 * @extends {React.Component}
 */
class HomePage extends React.Component<AllProps> {
  /**
   * 构造函数
   * Creates an instance of HomePage.
   * @param {AllProps} props
   * @memberof HomePage
   */
  constructor(props: AllProps) {
    super(props);
  }

  /**
   * 数据获取
   *
   * @memberof HomePage
   */
  public componentDidMount() {
    this.props.fetchPic();
  }

  /**
   * 查看图片
   *
   * @memberof HomePage
   */
  public onPullPic = () => {
    this.props.fetchPicVisible(true);
  }

  /**
   * 渲染页面
   *
   * @returns
   * @memberof HomePage
   */
  public render() {
    return <div>
      <Card style={ { margin: "10px", height: "100%" } }>
        <Button type="primary" onClick={ this.onPullPic }>点击查看图片</Button>
      </Card>
      {
        this.props.picVisible ? 
        <div>
          {
            this.props.picList.map((item: PicInfo) => 
              <div style={{ float: "left", border: "3px solid #ccc" }} key={ item.id } id={ item.id }>
                <img src={ item.url } alt=""/>
              </div>
            )
          }
        </div> : null
      }
      {/* <div style={ {width: "100px", height: "150px", backgroundColor: "red"} } > Loading...</div> */}
    </div>
  }
}

// mapStateToProps
const mapPropsToState = ({ picState }: ApplicationState) => ({
  picList: picState.picList,
  picVisible: picState.picVisible
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPic: () => dispatch(fetchPic()),
  fetchPicVisible: (visible: boolean) => dispatch(fetchPicVisible(visible))
});

export default connect(mapPropsToState, mapDispatchToProps)(HomePage);
