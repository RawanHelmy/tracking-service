import "./tracking-page.css";

import { Component } from "react";
import { withTranslation } from "react-i18next";

class TrackingPage extends Component {
  state = {
    input: "",
  };
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  setTrackingNumber = () => {
    if (this.state.input !== "") {
      this.props.history.push(`/TrackingStatus/${this.state.input}`);
    }
  };
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
              <input
                type="text"
                placeholder={t("Tracking No.")}
                onChange={this.handleChange}
              />
              <button type="submit" onClick={this.setTrackingNumber}>
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
