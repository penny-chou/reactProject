import React from "react";

class SalaryPay extends React.Component {
  constructor(props: any, context: any) {
    super(props);
    console.log(this.context);
  }
  public render() {
    return <div>
      SalaryPay
    </div>
  }
}

export default SalaryPay;
