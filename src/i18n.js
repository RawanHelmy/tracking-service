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
        "Latest Update": "Latest Update",
        "Seller Name": "Seller Name",
        "Delivery Date": "Delivery Date",
        DELIVERED: "Delivered",
        DELIVERED_TO_SENDER: "Shipment out for Delivery",
        "Shipment Created": "Shipment Created",
        "Delivered Shipment from Seller": "Delivered Shipment from Seller",
        "Delivery Address": "Delivery Address",
        NOAddress: "No Address Currently Assigned",
        "Is there any problem in your shipment?":
          "Is there any problem in your shipment?",
        "Report a problem": "Report a problem",
        "Delivery Details": "Delivery Details",
        Branch: "Branch",
        Date: "Date",
        Time: "Time",
        Details: "Details",
        "Main Branch": "Main Branch",
        TICKET_CREATED: "Shipment Created",
        PACKAGE_RECEIVED: "Shipment Received",
        NOT_YET_SHIPPED: "Shipment not Shipped Yet",
        OUT_FOR_DELIVERY: "Shipment out for Delivery",
        RECEIVED_DELIVERY_LOCATION: "Received Delivery Location",
        WAITING_FOR_CUSTOMER_ACTION: "Waiting for customer action",
        dir: "ltr",
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
        "Tracking No.": " رقم الشحنة. ",
        "logo header":
          "https://bosta.co/wp-content/uploads/2019/08/Component.svg",
        "logo footer":
          "https://bosta.co/wp-content/uploads/2019/08/bosta_logo_ar_red.svg",
        "Latest Update": "اخر تحديت",
        "Seller Name": "اسم التاجر",
        "Delivery Date": "موعد التسليم خلال",
        DELIVERED: "تم التسليم",
        DELIVERED_TO_SENDER: "الشحنه خرجت للتسليم",
        "Shipment Created": "تم انشاء الشحنة",
        "Delivered Shipment from Seller": "تم استلام الشحنة من التاجر",
        "Delivery Address": "عنوان التسليم",
        NOAddress: "لا يوجد عنوان",
        "Is there any problem in your shipment?": "هل يوجد مشكلة في شحنتك ؟!",
        "Report a problem": "ابلاغ عن مشكلة",
        "Delivery Details": "تفصيل الشحنة",
        Branch: "الفرع",
        Date: "التاريخ",
        Time: "الوقت",
        Details: "التفصيل",
        "Main Branch": "الفرع الرئيسي",
        TICKET_CREATED: "تم إنشاء الشحنة",
        PACKAGE_RECEIVED: "تم استلام الشحنة",
        NOT_YET_SHIPPED: "لم يتم شحن الشحنة بعد",
        OUT_FOR_DELIVERY: "الشحنه خرجت للتسليم",
        RECEIVED_DELIVERY_LOCATION: "استلام موقع التسليم",
        WAITING_FOR_CUSTOMER_ACTION: "في انتظار إجراء العميل",
        dir: "rtl",
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
