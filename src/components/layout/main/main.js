import "./main.css";

import Footer from "../footer/footer";
import Header from "../header/header";
import TrackingPage from "../../pages/tracking-page/tracking-page";

function Main() {
  return (
    <div>
      <Header />
      <div className="Main">
        <TrackingPage />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
