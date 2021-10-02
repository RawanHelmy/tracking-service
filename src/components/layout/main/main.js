import "./main.css";

import Footer from "../footer/footer";
import Header from "../header/header";
import TrackingPage from "../../pages/tracking-page/tracking-page";
import TrackingStatus from "../../pages/tracking-status-page/tracking-status-page";

function Main() {
  return (
    <div>
      <Header />
      <div className="Main">
        {/* <TrackingPage /> */}
        <TrackingStatus />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
