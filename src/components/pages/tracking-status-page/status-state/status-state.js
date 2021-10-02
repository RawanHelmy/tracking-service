import "./status-state.css";

import { Component } from "react";
import { withTranslation } from "react-i18next";

class StatusState extends Component {
  setColor = () => {
    switch (this.props.state) {
      case "DELIVERED":
        return "#36b700";
      case "CANCELED":
        return "#ff0000";
      case "DELIVERED_TO_SENDER":
        return "#f9b905";
      default:
        break;
    }
  };
  setWidth = () => {
    switch (this.props.state) {
      case "DELIVERED":
        return 100;
      case "CANCELED":
        return 0;
      case "DELIVERED_TO_SENDER":
        return 68;
      default:
        break;
    }
  };
  setIcons = () => {
    switch (this.props.state) {
      case "DELIVERED":
        return (
          <div className="statuses icons">
            <div>
              <i
                className="fa fa-check-circle"
                style={{ color: this.setColor() }}
              ></i>
            </div>
            <div>
              <i
                className="fa fa-check-circle"
                style={{ color: this.setColor() }}
              ></i>
            </div>
            <div>
              <i
                className="fa fa-check-circle"
                style={{ color: this.setColor() }}
              ></i>
            </div>
            <div>
              <i
                className="fa fa-check-circle"
                style={{ color: this.setColor() }}
              ></i>
            </div>
          </div>
        );
      case "CANCELED":
        return (
          <div className="statuses icons">
            <div>
              <i
                className="fa fa-times-circle"
                style={{ color: this.setColor() }}
              ></i>
            </div>
            <div>
              <i
                className="fa fa-times-circle"
                style={{ color: this.setColor() }}
              ></i>
            </div>
            <div>
              <i
                className="fa fa-times-circle"
                style={{ color: this.setColor() }}
              ></i>
            </div>
            <div>
              <i
                className="fa fa-times-circle"
                style={{ color: this.setColor() }}
              ></i>
            </div>
          </div>
        );
      case "DELIVERED_TO_SENDER":
        return (
          <div className="statuses icons">
            <div>
              <i
                className="fa fa-check-circle"
                style={{ color: this.setColor() }}
              ></i>
            </div>
            <div>
              <i
                className="fa fa-check-circle"
                style={{ color: this.setColor() }}
              ></i>
            </div>
            <div className="truck">
              <i className="fa fa-truck"></i>
            </div>
            <div className="checked">
              <i className="fa fa-check-circle"></i>
            </div>
          </div>
        );
      default:
        break;
    }
  };
  render() {
    const { t } = this.props;
    return (
      <div className="StateContainer">
        <div className="progess status">
          {this.setIcons()}
          <div
            className="progress-bar status-bar inProgess"
            style={{
              width: this.setWidth() + "%",
              backgroundColor: this.setColor(),
            }}
          ></div>
        </div>
        <div className="statuses">
          <div className="Column">
            <p>{t("Shipment Created")}</p>
          </div>
          <div className="Column">
            <p>{t("Delivered Shipment from Seller")}</p>
          </div>
          <div className="Column">
            <p>{t("DELIVERED_TO_SENDER")}</p>
          </div>
          <div className="Column">
            <p>{t("DELIVERED")}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default withTranslation()(StatusState);
