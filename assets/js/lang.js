// assets/js/lang.js
(function () {
  const DEFAULT_LANG = 'de';
  const SUPPORTED = ['de','en'];

  // --- Wörterbuch ---
  const dict = {
    de: {
      // Meta
      brand: "IT-Service-Level-First",
      title_home: "Start – IT-Service-Level-First",
      title_services: "Leistungen – IT-Service-Level-First",
      title_about: "Über uns – IT-Service-Level-First",
      title_contact: "Kontakt – IT-Service-Level-First",
      title_imprint: "Impressum – IT-Service-Level-First",
      title_privacy: "Datenschutz – IT-Service-Level-First",
      title_thanks: "Danke – IT-Service-Level-First",

      // Nav
      nav_home: "Start",
      nav_services: "Leistungen",
      nav_about: "Über uns",
      nav_contact: "Kontakt",
      nav_imprint: "Impressum",
      nav_privacy: "Datenschutz",

      // Legal Pill
      legal_pill: "Rechtliches",

      // Impressum
      imprint_h1: "Impressum",
      imprint_intro: "Angaben gemäß § 5 TMG / § 55 RStV.",
      imprint_provider: "Anbieter",
      imprint_contact: "Kontakt",
      imprint_represent: "Vertretungsberechtigt",
      imprint_vat: "Umsatzsteuer-ID",
      imprint_register: "Registereintrag",
      imprint_disclaimer: "Haftungsausschluss",
      imprint_copyright: "Urheberrecht",
      imprint_questions: "Haben Sie Fragen zu den Angaben?",
      imprint_contactus: "Wir sind gerne für Sie da.",
      cta_contact: "Kontakt",

      // Datenschutz
      privacy_h1: "Datenschutzerklärung",
      privacy_intro: "Transparenz ist uns wichtig. Nachfolgend informieren wir Sie darüber, welche personenbezogenen Daten wir verarbeiten und welche Rechte Sie haben.",
      privacy_controller: "Verantwortlicher",
      privacy_purpose: "Zwecke & Rechtsgrundlagen",
      privacy_data: "Verarbeitete Daten",
      privacy_recipients: "Empfänger / Auftragsverarbeitung",
      privacy_cookies: "Cookies & Tracking",
      privacy_storage: "Speicherdauer",
      privacy_rights: "Ihre Rechte",

      // Footer
      footer_nav: "Navigation",
      footer_contact: "Kontakt",
      footer_rights: "Alle Rechte vorbehalten",

      // Thankyou
      thanks_h1: "🎉 Vielen Dank für Ihre Nachricht!",
      thanks_intro: "Wir haben Ihre Anfrage erfolgreich erhalten und melden uns schnellstmöglich bei Ihnen.",
      thanks_back_btn: "Zurück zur Startseite"
    },

    en: {
      // Meta
      brand: "IT-Service-Level-First",
      title_home: "Home – IT-Service-Level-First",
      title_services: "Services – IT-Service-Level-First",
      title_about: "About Us – IT-Service-Level-First",
      title_contact: "Contact – IT-Service-Level-First",
      title_imprint: "Imprint – IT-Service-Level-First",
      title_privacy: "Privacy Policy – IT-Service-Level-First",
      title_thanks: "Thank You – IT-Service-Level-First",

      // Nav
      nav_home: "Home",
      nav_services: "Services",
      nav_about: "About",
      nav_contact: "Contact",
      nav_imprint: "Imprint",
      nav_privacy: "Privacy Policy",

      // Legal Pill
      legal_pill: "Legal",

      // Impressum
      imprint_h1: "Imprint",
      imprint_intro: "Information according to § 5 TMG / § 55 RStV.",
      imprint_provider: "Provider",
      imprint_contact: "Contact",
      imprint_represent: "Authorized Representative",
      imprint_vat: "VAT ID",
      imprint_register: "Commercial Register",
      imprint_disclaimer: "Disclaimer",
      imprint_copyright: "Copyright",
      imprint_questions: "Do you have questions about the information?",
      imprint_contactus: "We are happy to assist you.",
      cta_contact: "Contact",

      // Privacy
      privacy_h1: "Privacy Policy",
      privacy_intro: "Transparency is important to us. Below we inform you about which personal data we process and what rights you have.",
      privacy_controller: "Controller",
      privacy_purpose: "Purposes & Legal Basis",
      privacy_data: "Processed Data",
      privacy_recipients: "Recipients / Data Processing",
      privacy_cookies: "Cookies & Tracking",
      privacy_storage: "Storage Duration",
      privacy_rights: "Your Rights",

      // Footer
      footer_nav: "Navigation",
      footer_contact: "Contact",
      footer_rights: "All rights reserved",

      // Thankyou
      thanks_h1: "🎉 Thank you for your message!",
      thanks_intro: "We have received your request successfully and will get back to you as soon as possible.",
      thanks_back_btn: "Back to Homepage"
    }
  };

  // --- Script ---
  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[lang] && dict[lang][key]) {
        el.textContent = dict[lang][key];
      }
    });

    // Titel aktualisieren, falls data-i18n gesetzt
    const titleEl = document.querySelector('title');
    const titleKey = titleEl?.getAttribute('data-i18n');
    if (titleKey && dict[lang][titleKey]) {
      document.title = dict[lang][titleKey];
    }
  }

  // Sprach-Buttons aktivieren
  document.querySelectorAll('.lang-select').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Init mit gespeicherter Sprache oder Default
  setLang(localStorage.getItem('lang') || DEFAULT_LANG);
})();
