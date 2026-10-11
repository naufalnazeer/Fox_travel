// All static UI copy, in English and Malayalam.
// Place names, phone numbers and emails live in data/siteConfig.js and are not translated here —
// addresses stay in Roman script in both languages (standard practice for postal/GPS use in India).
const translations = {
  en: {
    nav: {
      home: "Home",
      fleet: "Fleet & Pricing",
      gallery: "Gallery",
      contact: "Contact",
      callNow: "Call Now",
    },
    hero: {
      badge: "Based in Anchal, Kerala",
      headingPrefix: "Comfortable journeys for every",
      headingHighlight: "occasion",
      description:
        "TravelSolutions is a bus & minibus travel provider based in Elavaramkuzhi, Velakupara, Anchal — organizing safe, comfortable transport for weddings, school & college trips, pilgrimages, and community tours.",
      description2:
        "Tell us where you're headed and how many seats you need — we'll take care of the rest.",
      ctaQuote: "Get a Quote",
      ctaCall: "Call Now",
    },
    services: {
      kicker: "What we serve",
      title: "We offer our best services",
    },
    fleetSection: {
      kicker: "Fleet & Pricing",
      title: "Choose the right vehicle for your trip",
      viewAll: "View Full Price List",
      popular: "Most Booked",
      enquire: "Enquire",
    },
    whyUs: {
      kicker: "Why Choose Us",
      title: "Your trusted travel partner in Anchal",
      description:
        "Whether it's a wedding, a school excursion, or a community pilgrimage, TravelSolutions plans every trip around your schedule, group size, and budget — with local drivers who know the routes well.",
      items: [
        "Experienced, verified drivers",
        "On-time pickup, every time",
        "Clean, well-maintained buses",
        "Transparent pricing, no hidden charges",
      ],
    },
    gallerySection: {
      kicker: "Gallery",
      title: "Our fleet in action",
    },
    cta: {
      title: "Planning a trip?",
      description: "Get an instant quote on WhatsApp or give us a call — we're happy to help.",
      whatsapp: "WhatsApp Us",
    },
    fleetPage: {
      title: "Fleet & Pricing",
      note: "Prices below are starting estimates for travel within the district and vary by distance, trip duration, and number of days. Contact TravelSolutions on WhatsApp or call for an exact quote.",
      notSureTitle: "Not sure which bus fits your group?",
      notSureDesc: "Send us your group size and destination — we'll recommend the right vehicle.",
      askWhatsapp: "Ask on WhatsApp",
    },
    galleryPage: {
      title: "Gallery",
      note: "A preview of the kind of buses and trips TravelSolutions offers. Real photos of our fleet and past trips will replace these soon.",
    },
    contactPage: {
      title: "Contact Us",
      getInTouch: "Get in touch",
      description:
        "Reach out for bookings, quotes, or any questions about our buses and services. We usually reply within the same day.",
      whatsapp: "WhatsApp",
      callNow: "Call Now",
    },
    footer: {
      description:
        "TravelSolutions is a bus & minibus travel provider based in Elavaramkuzhi, Velakupara, Anchal — serving weddings, school trips, and community tours across the region.",
      quickLinks: "Quick Links",
      ourServices: "Our Services",
      contact: "Contact",
      rights: "All rights reserved.",
    },
    whatsapp: {
      default: "Hi TravelSolutions, I'd like to enquire about a bus booking.",
      vehicle: (name, seats) => `Hi TravelSolutions, I'd like to enquire about the ${name} (${seats}).`,
    },
  },
  ml: {
    nav: {
      home: "ഹോം",
      fleet: "വാഹനങ്ങളും നിരക്കും",
      gallery: "ഗാലറി",
      contact: "ബന്ധപ്പെടുക",
      callNow: "ഇപ്പോൾ വിളിക്കൂ",
    },
    hero: {
      badge: "അഞ്ചൽ ആസ്ഥാനം",
      headingPrefix: "എല്ലാ അവസരങ്ങൾക്കും",
      headingHighlight: "സുഖകരമായ യാത്രകൾ",
      description:
        "Elavaramkuzhi, Velakupara, അഞ്ചൽ ആസ്ഥാനമായി പ്രവർത്തിക്കുന്ന ബസ് & മിനി ബസ് സർവീസാണ് TravelSolutions — വിവാഹങ്ങൾ, സ്കൂൾ & കോളേജ് യാത്രകൾ, തീർത്ഥാടനങ്ങൾ, സാമൂഹിക ടൂറുകൾ എന്നിവയ്ക്കായി സുരക്ഷിതവും സുഖകരവുമായ യാത്രാസൗകര്യം ഞങ്ങൾ ഒരുക്കുന്നു.",
      description2:
        "നിങ്ങൾ എവിടേക്കാണ് പോകേണ്ടതെന്നും എത്ര സീറ്റ് വേണമെന്നും പറഞ്ഞാൽ മതി — ബാക്കിയെല്ലാം ഞങ്ങൾ നോക്കിക്കൊള്ളാം.",
      ctaQuote: "ക്വോട്ട് ചോദിക്കൂ",
      ctaCall: "ഇപ്പോൾ വിളിക്കൂ",
    },
    services: {
      kicker: "ഞങ്ങൾ നൽകുന്നത്",
      title: "ഞങ്ങളുടെ മികച്ച സേവനങ്ങൾ",
    },
    fleetSection: {
      kicker: "വാഹനങ്ങളും നിരക്കും",
      title: "നിങ്ങളുടെ യാത്രയ്ക്ക് അനുയോജ്യമായ വാഹനം തിരഞ്ഞെടുക്കൂ",
      viewAll: "മുഴുവൻ വില പട്ടിക കാണൂ",
      popular: "ഏറ്റവും കൂടുതൽ ബുക്ക് ചെയ്യുന്നത്",
      enquire: "അന്വേഷിക്കൂ",
    },
    whyUs: {
      kicker: "ഞങ്ങളെ തിരഞ്ഞെടുക്കാൻ കാരണം",
      title: "അഞ്ചലിലെ നിങ്ങളുടെ വിശ്വസ്ത യാത്രാ പങ്കാളി",
      description:
        "വിവാഹമോ സ്കൂൾ യാത്രയോ സാമൂഹിക തീർത്ഥാടനമോ ആകട്ടെ, നിങ്ങളുടെ സമയക്രമത്തിനും സംഘത്തിന്റെ വലുപ്പത്തിനും ബജറ്റിനും അനുസരിച്ച് TravelSolutions എല്ലാ യാത്രയും ആസൂത്രണം ചെയ്യുന്നു — വഴികൾ നന്നായി അറിയാവുന്ന ലോക്കൽ ഡ്രൈവർമാരോടൊപ്പം.",
      items: [
        "പരിചയസമ്പന്നരും പരിശോധിച്ചുറപ്പിച്ചവരുമായ ഡ്രൈവർമാർ",
        "എപ്പോഴും കൃത്യസമയത്ത് പിക്കപ്പ്",
        "വൃത്തിയുള്ളതും നല്ല നിലയിലുള്ളതുമായ ബസുകൾ",
        "സുതാര്യമായ വില, മറഞ്ഞ ചാർജുകളില്ല",
      ],
    },
    gallerySection: {
      kicker: "ഗാലറി",
      title: "ഞങ്ങളുടെ വാഹനവ്യൂഹം പ്രവർത്തനത്തിൽ",
    },
    cta: {
      title: "യാത്ര പ്ലാൻ ചെയ്യുകയാണോ?",
      description: "വാട്ട്സ്ആപ്പിൽ ഉടൻ ക്വോട്ട് വാങ്ങൂ അല്ലെങ്കിൽ ഞങ്ങളെ വിളിക്കൂ — സഹായിക്കാൻ സന്തോഷമുണ്ട്.",
      whatsapp: "വാട്ട്സ്ആപ്പ് ചെയ്യൂ",
    },
    fleetPage: {
      title: "വാഹനങ്ങളും നിരക്കും",
      note: "താഴെ നൽകിയ നിരക്കുകൾ ജില്ലയ്ക്കുള്ളിലെ യാത്രയ്ക്കുള്ള ആരംഭ നിരക്കുകളാണ്, ദൂരം, യാത്രാ ദൈർഘ്യം, ദിവസങ്ങളുടെ എണ്ണം എന്നിവയ്ക്കനുസരിച്ച് വ്യത്യാസപ്പെടും. കൃത്യമായ ക്വോട്ടിന് TravelSolutions-നെ വാട്ട്സ്ആപ്പിൽ ബന്ധപ്പെടുക അല്ലെങ്കിൽ വിളിക്കുക.",
      notSureTitle: "ഏത് ബസ് വേണമെന്ന് ഉറപ്പില്ലേ?",
      notSureDesc: "നിങ്ങളുടെ സംഘത്തിന്റെ വലുപ്പവും ലക്ഷ്യസ്ഥാനവും ഞങ്ങൾക്ക് അയയ്ക്കൂ — അനുയോജ്യമായ വാഹനം ഞങ്ങൾ നിർദ്ദേശിക്കാം.",
      askWhatsapp: "വാട്ട്സ്ആപ്പിൽ ചോദിക്കൂ",
    },
    galleryPage: {
      title: "ഗാലറി",
      note: "TravelSolutions നൽകുന്ന ബസുകളുടെയും യാത്രകളുടെയും ഒരു മുന്നോടി കാഴ്ച. ഞങ്ങളുടെ വാഹനവ്യൂഹത്തിന്റെയും മുൻ യാത്രകളുടെയും യഥാർത്ഥ ഫോട്ടോകൾ ഉടൻ ഇവയ്ക്ക് പകരം വരും.",
    },
    contactPage: {
      title: "ബന്ധപ്പെടുക",
      getInTouch: "ബന്ധപ്പെടൂ",
      description:
        "ബുക്കിംഗ്, ക്വോട്ട്, അല്ലെങ്കിൽ ഞങ്ങളുടെ ബസുകളെയും സേവനങ്ങളെയും കുറിച്ചുള്ള ഏത് ചോദ്യത്തിനും ബന്ധപ്പെടുക. സാധാരണയായി അതേ ദിവസം തന്നെ ഞങ്ങൾ മറുപടി നൽകും.",
      whatsapp: "വാട്ട്സ്ആപ്പ്",
      callNow: "ഇപ്പോൾ വിളിക്കൂ",
    },
    footer: {
      description:
        "Elavaramkuzhi, Velakupara, അഞ്ചൽ ആസ്ഥാനമായി പ്രവർത്തിക്കുന്ന ബസ് & മിനി ബസ് യാത്രാ സേവനമാണ് TravelSolutions — വിവാഹങ്ങൾ, സ്കൂൾ യാത്രകൾ, സാമൂഹിക ടൂറുകൾ എന്നിവയ്ക്കായി ഈ പ്രദേശത്തുടനീളം സേവനം നൽകുന്നു.",
      quickLinks: "ക്വിക്ക് ലിങ്കുകൾ",
      ourServices: "ഞങ്ങളുടെ സേവനങ്ങൾ",
      contact: "ബന്ധപ്പെടാൻ",
      rights: "എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം.",
    },
    whatsapp: {
      default: "ഹായ് TravelSolutions, ഒരു ബസ് ബുക്കിംഗ് സംബന്ധിച്ച് അന്വേഷിക്കാൻ ആഗ്രഹിക്കുന്നു.",
      vehicle: (name, seats) => `ഹായ് TravelSolutions, ${name} (${seats}) സംബന്ധിച്ച് അന്വേഷിക്കാൻ ആഗ്രഹിക്കുന്നു.`,
    },
  },
};

export default translations;
