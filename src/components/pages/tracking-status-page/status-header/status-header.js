import "./status-header.css";

import { Component } from "react";
import { withTranslation } from "react-i18next";

class StatusHeader extends Component {
  render() {
    const { t, status } = this.props;
    return (
      <div className="StatusHeaderContainer">
        <div className="Columns">
          <div className="Column">
            <label>
              {t("Tracking No.")} {this.props.trackingNo}
            </label>
            <p className={this.props.status}>{t(status.trim())}</p>
          </div>
          <div className="Column">
            <label>{t("Latest Update")}</label>
            <p>
              {new Date(this.props.updateDate).toDateString()}{" "}
              {new Date(this.props.updateDate).toLocaleTimeString()}
            </p>
          </div>
          <div className="Column">
            <label>{t("Seller Name")}</label>
            <p>{this.props.seller ? this.props.seller : "-"}</p>
          </div>
          <div className="Column">
            <label>{t("Delivery Date")}</label>
            <p>{new Date(this.props.deliveryDate).toDateString()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(StatusHeader);
