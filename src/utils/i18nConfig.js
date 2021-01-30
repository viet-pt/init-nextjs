const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: "vi",
  otherLanguages: ["en"], // list all languages here
  localePath: typeof window === "undefined" ? "static/locales" : "static/locales",
  detection: {
    // check if language is cached in cookies, if not check local storage
    order: ["cookie", "localStorage"],

    // next-i18next by default searches for the "next-i18next" cookie on server requests
    lookupCookie: "next-i18next",
    lookupLocalStorage: "i18nextLng",
    
    // cache the language in cookies and local storage
    caches: ["cookie", "localStorage"]
  },
  react: {
    // trigger a rerender when language is changed
    bindI18n: "languageChanged",
    // we're NOT using suspsense to detect when the translations have loaded
    useSuspense: false
  }
});