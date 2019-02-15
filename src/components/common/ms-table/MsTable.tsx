import * as React from "react";
import ReactDOM from "react-dom";
import { Table, Pagination } from "antd";

interface MsTableProps<T> {
  rowKey?: string | ((record: T, index: number) => string);
  align?: "left" | "center" | "right";
  size?: "small" | "default" | "middle";
  columns: any;
  dataSource: any;
  loading?: any;
  rowSelection?: any;
  pagination?: any;
  className?: string;
  scroll?: {
    x?: boolean | number | string;
    y?: boolean | number | string;
  };
  onChange?: (pagination: any) => void;
  onRow?: (record: T, index: number) => void;
}

/**
 * OwnState
 *
 * @interface MsTableState
 */
interface MsTableState {
  height: number;
}

class MsTable extends React.Component<MsTableProps<any>, MsTableState> {
  /**
   * 构造函数
   * @param {MsTableProps<any>} props
   * @memberof MsTable
   */
  constructor(props: MsTableProps<any>) {
    super(props);

    // 初始化
    this.state = {
      height: 300
    };
  }

  /**
   * 组件加载后
   *
   * @memberof MsTable
   */
  public componentDidMount() {
    // 给窗口window添加浏览器窗口调整大小事件
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  /**
   * 组件更新后
   *
   * @param {MsTableProps<any>} prevProps
   * @memberof MsTable
   */
  public componentDidUpdate(prevProps: MsTableProps<any>) {
    if (this.props.dataSource !== prevProps.dataSource) {
      this.setTableHeight(this.state.height);
    }
  }

  /**
   * 组件卸载前
   *
   * @memberof MsTable
   */
  public componentWillUnmount() {
    // 删除window窗口调整事件
    window.removeEventListener("resize", this.handleResize);
  }
  
  /**
   * 切换页码
   *
   * @memberof MsTable
   */
  public onChange = (page: number, pageSize: number) => {
    if (this.props.onChange) {
      const pagination: any = { current: page, pageSize };
      this.props.onChange(pagination);
    }
  }

  /**
   * 设置窗口调整回调函数
   *
   * @memberof MsTable
   */
  public handleResize = () => {
    // table对象
    const table: any = ReactDOM.findDOMNode(this);
    // layout高度，头部64，margin32,padding 32
    const totalHeight: number = document.querySelector("#root")!.clientHeight - 128;
    // 减去表头和分页
    let h = totalHeight - table.querySelector(".ant-table-thead").offsetHeight - 42;
    // 减去搜索框等
    for (const item of table.parentNode.childNodes) {
      if (item !== table && (item.style && !item.style.float)) {
        const style = item.currentStyle || window.getComputedStyle(item);
        const top = style.marginTop;
        const bottom = style.marginBottom;
        h -= item.offsetHeight;

        // 减去marginTop
        if (top) {
          h -= Number(top.replace("px", ""));
        }

        // 减去marginBottom
        if (bottom) {
          h -= Number(bottom.replace("px", ""));
        }
      }
    }

    // 设置table高度
    this.setState({
      height: h
    });
    
    this.setTableHeight(h);
  };

  public render() {
    let className = "ms-table-default";

    if (this.props.className) {
      className = this.props.className + "ms-table-default";
    }

    if (this.props.rowSelection) {
      className = this.props.className + " ms-table-default ms-table-default-row-select";
    }

    return (
      <div className="ms-table-container-default">
        <Table
          { ...this.props }
          className={ className }
          scroll={ {y: this.state.height, ...this.props.scroll} }
          pagination={ false }
        />
        <div style={ {width: "100%", textAlign: "right"} }>
        {
          this.props.pagination && this.props.dataSource && this.props.dataSource.length ? 
          <Pagination 
            onChange={ this.onChange }
            onShowSizeChange={ this.onChange }
            {
              ...{
                size: "small",
                pageSizeOptions: ["25", "50", "100"],
                showTotal: (total: number) => `共${ total }条`,
                showSizeChanger: true,
                showQuickJumper: true,
                style: {padding: "16px 0 0 0 "},
                ...this.props.pagination
              }
            }
          /> : null
        }
        </div>
      </div>
    );
  }

  private setTableHeight = (height: number) => {
    const table: any = ReactDOM.findDOMNode(this);
    const body = table.querySelector(".ant-table-body");
    const placeholder = table.querySelector(".ant-table-placeholder");

    // 清空body高度
    if(body && body.style) {
      body.style.height = "";
    }

    // 清空placeHolder高度
    if (placeholder && placeholder.style) {
      placeholder.style.height = "";
    }

    // 数据存在场合
    if (this.props.dataSource && this.props.dataSource.length) {
      // body存在场合
      if (body) {
        body.style.height = (height - 2) + "px";
      }
    } else {
      // 数据不存在的场合
      if (placeholder) {
        // 设置placeholder高度并居中
        placeholder.style.height = (height - 2) + "px";
        placeholder.style.paddingTop = ((height - 2) - 70) / 3 + "px";
      }
    }
  }
}

export default MsTable
