import "./tracking-status-page.css";

import { Component } from "react";
import StatusAddress from "./status-address/status-address";
import StatusDetails from "./status-details/status-details";
import StatusHeader from "./status-header/status-header";
import StatusState from "./status-state/status-state";

export default class TrackingStatus extends Component {
  tableData = [
    {
      Branch: "Branch 1",
      Date: "05/04/2020",
      Time: "12:20 pm",
      Details: "Details",
    },
    {
      Branch: "Branch 1",
      Date: "05/04/2020",
      Time: "12:20 pm",
      Details: "Details",
    },
    {
      Branch: "Branch 1",
      Date: "05/04/2020",
      Time: "12:20 pm",
      Details: "Details",
    },
    {
      Branch: "Branch 1",
      Date: "05/04/2020",
      Time: "12:20 pm",
      Details: "Details",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      shipment: {},
    };
  }
  componentDidMount() {
    fetch("https://tracking.bosta.co/shipments/track/6636234")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            shipment: result,
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    if (this.state.isLoaded)
      return (
        <div>
          <StatusHeader
            trackingNo={this.state.shipment.TrackingNumber}
            updateDate={this.state.shipment.CurrentStatus.timestamp}
            seller={this.state.shipment.TransitEvents[1].hub}
            deliveryDate={this.state.shipment.CurrentStatus.timestamp}
            status={this.state.shipment.CurrentStatus.state}
          />
          <StatusState state={this.state.shipment.CurrentStatus.state} />
          <div className="page-bottom">
            <StatusDetails details={this.state.shipment.TransitEvents} />
            <StatusAddress address={this.state.shipment.address} />
          </div>
        </div>
      );
    else {
      return <div></div>;
    }
  }
}
