import "./status-state.css";

import { Component } from "react";
import { withTranslation } from "react-i18next";

class StatusState extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="StateContainer">
        <div className="progess status">
          <div className="statuses icons">
            <div>
              <i className="fa fa-ban"></i>
            </div>
            <div>
              <i className="fas fa-truck-loading"></i>
            </div>
            <div>
              <i className="fa fa-truck-moving"></i>
            </div>
            <div>
              <i className="fas fa-calendar-check"></i>
            </div>
            {/* <div>
              <i className="fa fa-check-circle"></i>
            </div>
            <div>
              <i className="fa fa-check-circle "></i>
            </div>
            <div>
              <i className="fa fa-check-circle"></i>
            </div>
            <div>
              <i className="fa fa-check-circle"></i>
            </div> */}
          </div>
          <div
            className="progress-bar status-bar inProgess"
            style={{ width: this.props.width + "%" }}
          ></div>
        </div>
        <div className="statuses">
          <div className="Column">
            <p>{t("Shipment Canceled")}</p>
          </div>
          <div className="Column">
            <p>{t("Delivered Shipment from Seller")}</p>
          </div>
          <div className="Column">
            <p>{t("Shipment out for Delivery")}</p>
          </div>
          <div className="Column">
            <p>{t("Deliverd")}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default withTranslation()(StatusState);
