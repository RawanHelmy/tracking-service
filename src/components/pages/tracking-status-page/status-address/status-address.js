import "./status-address.css";

import { Component } from "react";

export default class StatusAddress extends Component {
  render() {
    return (
      <div className="AddressContainer">
        <label>Delivery Address</label>
        <div>
          <div className="Address">
            <p>{this.props.address}</p>
          </div>
          <div className="Problem">
            <div className="img">
              <img
                src="data:image/png;base64,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"
                alt=""
                width="100"
                height="100"
              />
            </div>
            <div className="question">
              <label>Is there any problem in your shipment?</label>
              <button>Report a problem</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
