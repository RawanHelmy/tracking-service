import "./status-address.css";

import { Component } from "react";

export default class StatusAddress extends Component {
  render() {
    return (
      <div className="AddressContainer">
        <label>Delivery Address</label>
        <div>
          <div className="Address">
            <p>Address , Address , Address</p>
          </div>
          <div className="Problem">
            <div className="img">
              <img src="https://github.com/RawanHelmy/tracking-service/blob/master/src/img/Screen%20Shot%202021-10-02%20at%202.27.14%20PM.png" />
            </div>
            <div>
              <label>Is there any problem in your shipment?</label>
              <button>Report a problem</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
