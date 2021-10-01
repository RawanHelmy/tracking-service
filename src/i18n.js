import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        Shipments: "Shipments",
        "Our Pricing": "Our Pricing",
        "Tracking Shipment": "Tracking Shipment",
        lang: "عربي",
        "Please Enter your shipment number and Track your Shipment.":
          "Please Enter your shipment number and Track your Shipment.",
        "Track another shipment": "Track another shipment",
        "Tracking No.": "Tracking No.",
        "logo header":
          "https://bosta.co/wp-content/uploads/2019/08/bosta_logo_en_red.svg",
        "logo footer":
          "https://bosta.co/wp-content/uploads/2019/08/bosta_logo_en_white.svg",
      },
    },
    ar: {
      translations: {
        Shipments: "الشحنات",
        "Our Pricing": "التسعير",
        "Tracking Shipment": "تتبع شحنتك",
        lang: "ENG",
        "Please Enter your shipment number and Track your Shipment.":
          "الرجاء إدخال رقم الشحنة وتتبع الشحنة الخاصة بك",
        "Track another shipment": "تتبع شحنة أخرى",
        "Tracking No.": " تتبع أي. ",
        "logo header":
          "https://bosta.co/wp-content/uploads/2019/08/Component.svg",
        "logo footer":
          "https://bosta.co/wp-content/uploads/2019/08/bosta_logo_ar_red.svg",
      },
    },
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});

export default i18n;
