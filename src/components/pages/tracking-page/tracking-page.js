import "./tracking-page.css";

import { Component } from "react";
import { withTranslation } from "react-i18next";

class TrackingPage extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="TrackingPageContent">
        <div className="TrackingInputContainer">
          <h1>
            {t("Please Enter your shipment number and Track your Shipment.")}
          </h1>
          <div className="trackingFrom">
            <h2>{t("Track another shipment")}</h2>
            <form>
              <input type="text" placeholder={t("Tracking No.")} />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(TrackingPage);
