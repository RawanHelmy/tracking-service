import "./tracking-status-page.css";

import { Component } from "react";
import StatusAddress from "./status-address/status-address";
import StatusDetails from "./status-details/status-details";
import StatusHeader from "./status-header/status-header";
import StatusState from "./status-state/status-state";

export default class TrackingStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      shipment: {},
    };
  }
  componentDidMount() {
    let num = this.props.match.params.trackingNumber;
    fetch(`https://tracking.bosta.co/shipments/track/${num}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            shipment: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  getDeliveryDate = () => {
    let date = this.state.shipment.CurrentStatus.timestamp;
    this.state.shipment.TransitEvents.forEach((element) => {
      if (element.state === "DELIVERED") {
        return element.timestamp;
      }
    });
    return date;
  };
  render() {
    if (this.state.isLoaded && !this.state.shipment.error)
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
    else if (!this.state.isLoaded) {
      return (
        <div className="spinner">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Error">
          <h1>{this.state.shipment.error}</h1>
        </div>
      );
    }
  }
}
