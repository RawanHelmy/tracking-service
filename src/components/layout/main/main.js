import "./main.css";

import Footer from "../footer/footer";
import Header from "../header/header";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <div dir={t("dir")}>
      <Header />
      <Footer />
    </div>
  );
}

export default Main;
