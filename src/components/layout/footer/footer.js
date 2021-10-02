import "./footer.css";

import { Component } from "react";
import { withTranslation } from "react-i18next";

class Footer extends Component {
  render() {
    const { t } = this.props;
    return (
      <footer>
        <div className="footer-content">
          <div className="firstcolumn">
            <div className="firstrow">
              <img src={t("logo footer")} alt="" width="110" height="36" />
            </div>
            <div className="secondrow">
              <p>help@bosta.co</p>
            </div>
            <div className="thirdrow">
              <span className="brand-container">
                <i className="fa fa-facebook"></i>
              </span>
              <span className="brand-container">
                <i className="fa fa-twitter"></i>
              </span>
            </div>
          </div>
          <div className="secondcolumn">
            <div className="firstrow">
              <h4>{t("Shipments")}</h4>
            </div>
            <div className="secondrow">
              <span className="routes">
                <p>{t("Our Pricing")}</p>
              </span>
              <span className="routes">
                <p>{t("Tracking Shipment")}</p>
              </span>
            </div>
          </div>
        </div>
        <div className="sub-footer">
          <p>Copyright ©2019 bosta.co</p>
        </div>
      </footer>
    );
  }
}

export default withTranslation()(Footer);
