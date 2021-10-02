import "./status-details.css";

import { Component } from "react";
import { Table } from "react-bootstrap";
import { withTranslation } from "react-i18next";

class StatusDetails extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="DetailsContainer">
        <label>{t("Delivery Details")}</label>
        <Table bordered hover>
          <thead>
            <tr>
              <th>{t("Branch")}</th>
              <th>{t("Date")}</th>
              <th>{t("Time")}</th>
              <th>{t("Details")}</th>
            </tr>
          </thead>
          <tbody>
            {this.props.details.map((object, key) => {
              return (
                <tr key={key}>
                  <td>{object.Branch ? object.Branch : t("Main Branch")}</td>
                  <td>{new Date(object.timestamp).toLocaleDateString()}</td>
                  <td>{new Date(object.timestamp).toLocaleTimeString()}</td>
                  <td>{t(object.state)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default withTranslation()(StatusDetails);
