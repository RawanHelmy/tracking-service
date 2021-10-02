import "./tracking-status-page.css";

import StatusAddress from "./status-address/status-address";
import StatusDetails from "./status-details/status-details";
import StatusHeader from "./status-header/status-header";
import StatusState from "./status-state/status-state";

function TrackingStatus() {
  return (
    <div>
      <StatusHeader
        trackingNo="123456"
        updateDate={new Date().toDateString()}
        seller="Test Name"
        deliveryDate={new Date().toDateString()}
        status="inProgress"
      />
      <StatusState status="inProgress" width="67" />
      <div className="page-bottom">
        <StatusDetails />
        <StatusAddress address="addressaddressaddressaaddressaddressaddressaddresssddressaddressaddressaddressaddressaddress" />
      </div>
    </div>
  );
}
export default TrackingStatus;
