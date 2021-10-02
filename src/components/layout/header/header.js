import "./header.css";

import { Container, Nav, Navbar } from "react-bootstrap";

import { Component } from "react";
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
              <Nav.Link className="link">
                <span>{t("Tracking Shipment")}</span>
              </Nav.Link>

              <Nav.Link className="lang">
                <button onClick={this.handleChange}>
                  <span>{t("lang")}</span>
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withTranslation()(Header);
