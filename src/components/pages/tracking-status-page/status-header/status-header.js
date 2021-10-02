import "./status-header.css";

import { Component } from "react";
import { withTranslation } from "react-i18next";

class StatusHeader extends Component {
  state = {};
  render() {
    const { t } = this.props;
    return (
      <div className="StatusHeaderContainer">
        <div className="Columns">
          <div className="Column">
            <label>
              {t("Tracking No.")} {this.props.trackingNo}
            </label>
            <p className={this.props.status}>{t(this.props.status)}</p>
          </div>
          <div className="Column">
            <label>{t("Latest Update")}</label>
            <p>{this.props.updateDate}</p>
          </div>
          <div className="Column">
            <label>{t("Seller Name")}</label>
            <p>{this.props.seller}</p>
          </div>
          <div className="Column">
            <label>{t("Expected Delivery Date")}</label>
            <p>{this.props.deliveryDate}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(StatusHeader);
