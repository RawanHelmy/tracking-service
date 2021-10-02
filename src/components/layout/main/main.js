import "./main.css";

import Footer from "../footer/footer";
import Header from "../header/header";
import TrackingPage from "../../pages/tracking-page/tracking-page";
import TrackingStatus from "../../pages/tracking-status-page/tracking-status-page";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <div dir={t("dir")}>
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
