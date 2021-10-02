import "./header.css";

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import { Component } from "react";
import TrackingPage from "../../pages/tracking-page/tracking-page";
import TrackingStatus from "../../pages/tracking-status-page/tracking-status-page";
import { withTranslation } from "react-i18next";

class Header extends Component {
  state = {
    lang: "en",
  };
  handleChange = () => {
    let newlang = "en";
    if (this.state.lang === "en") {
      newlang = "ar";
    }
    this.setState(() => ({ lang: newlang }));
    this.props.i18n.changeLanguage(newlang);
  };
  render() {
    const { t } = this.props;
    return (
      <Router>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              {" "}
              <img src={t("logo header")} alt="bosta.co" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="nav">
                <Link to="/TrackingPage" className="link">
                  <span>{t("Tracking Shipment")}</span>
                </Link>
                <Nav.Link className="lang" href="#x">
                  <button onClick={this.handleChange}>
                    <span>{t("lang")}</span>
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="Main">
          <Route path="/TrackingPage" component={TrackingPage} />
          <Route path="/" exact component={TrackingPage} />
          <Route
            path="/TrackingStatus/:trackingNumber"
            component={TrackingStatus}
          />
        </div>
      </Router>
    );
  }
}

export default withTranslation()(Header);
