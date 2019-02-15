import React from "react";
import { Button } from "antd";

/**
 * 函数节流和函数防抖
 *
 * @class SalaryAccount
 * @extends {React.Component}
 */
class SalaryAccount extends React.Component {
  /**
   * 监听页面点击事件
   *
   * @memberof SalaryAccount
   */
  public onClickBtn = () => {
  // 先序遍历
  //   function preLoop(node){
  //     var stack = [];
  //     var top = node;
  //     while(top){
  //       if(top.right){
  //         stack.push(top.right);
  //       }
  //       console.log(top.data);
  //       if(top.left){
  //         top = top.left;
  //       } else {
  //         top = stack[stack.length - 1];
  //         stack.pop()
  //       }
  //     }
  // }
  
  // let node = {  
  //   data: "A",
  //   left: {
  //     data: "B",
  //     left: {
  //       data: "D",
  //       left: null,
  //       right: null
  //     },
  //     right: {
  //       data: "E",
  //       left: {
  //         data: "G",
  //         left: null,
  //         right: null
  //       },
  //       right: null
  //     }
  //   },
  //   right: {
  //     data: "C",
  //     left: null,
  //     right: {
  //       data: "F",
  //       left: null,
  //       right: null
  //     }
  //   }
  // }

  // 中序遍历
  // function middleLoop(node){
  //   var stack = [];
  //   var top = node;
  //   var parent = null;
  //   while(top){
  //     if(top.left){
  //       stack.push(top);
  //       top = top.left;
  //       continue;
  //       console.log("aaa");
  //     } else {
  //       console.log(top.data);
  //     }
  //     if(top.right){
  //       top = top.right;
  //     } else {
  //       if(stack.length){
  //         parent = stack[stack.length - 1];
  //         stack.pop();
  //       }else {
  //         top = null;
  //       }
  //     }
      
  //     while(parent){
  //       console.log(parent.data);
  //       if(parent.right){
  //         top = parent.right;
  //         parent = null;
  //       }else{
  //         parent = stack.length ? stack[stack.length - 1]: null;
  //         stack.length && stack.pop();
  //         if(!stack.length){
  //            top = null;
  //         }
  //       }
  //     }
  //   }
  // }

  // 后序遍历
  // function lastLoop(node){
  //   var stack = [];
  //   var top = node;
  //   var parent = null;
  //   while(top){
  //     stack.push(top);
  //     if(top.left){
  //       top = top.left;
  //       continue;
  //     } 
  //     if(top.right){
  //       top = top.right;
  //     } else {
  //        console.log(top.data);
  //        stack.pop();
  //       if(stack.length){
  //         parent = stack[stack.length - 1];
  //       }else {
  //         top = null;
  //       }
  //     }
  //     while(parent){
  //       if(parent.right && parent.right !== top){
  //         top = parent.right;
  //         parent = null;
  //       } else {
  //          if(parent.right === top){
  //            top = null;
  //          }
  //         stack.pop()
  //         console.log(parent.data);
  //         if(parent.right === stack[stack.length - 1]){
  //            stack.length && console.log(stack[stack.length - 1].data);
  //            stack.length && stack.pop();
  //         }
  //         parent = stack.length ? stack[stack.length - 1] : null;
  //       }
  //     }
  //   }
  // }
}


  /**
   * 页面渲染
   *
   * @returns
   * @memberof SalaryAccount
   */
  public render() {
    return <div>
      <Button type="primary" onClick={ this.onClickBtn }>点击</Button>
    </div>
  }
}

export default SalaryAccount;
