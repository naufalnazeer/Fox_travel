// All static UI copy, in English and Malayalam.
// Place names, phone numbers and emails live in data/siteConfig.js and are not translated here —
// addresses stay in Roman script in both languages (standard practice for postal/GPS use in India).
const translations = {
  en: {
    nav: {
      home: "Home",
      fleet: "Fleet & Pricing",
      packages: "Packages",
      hotels: "Hotels",
      gallery: "Gallery",
      contact: "Contact",
      callNow: "Call Now",
    },
    hero: {
      badge: "Based in Anchal, Kerala",
      headingPrefix: "Comfortable journeys for every",
      headingHighlight: "occasion",
      description:
        "TravelSolutions is a travel company based in Elavaramkuzhi, Velakkupara, Anchal — bus & minibus transport for weddings, school & college trips, pilgrimages, and community tours, plus holiday tour packages, flight tickets, and hotel bookings.",
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
    destinations: {
      kicker: "Explore Kerala",
      title: "Popular Kerala Destinations",
      enquire: "Enquire",
    },
    packagesSection: {
      kicker: "Tour Packages",
      title: "Handpicked Holiday Packages",
      viewAll: "View All Packages",
    },
    hotelsSection: {
      kicker: "Hotel Stays",
      title: "Partner Hotels & Rooms",
      viewAll: "View All Hotels",
    },
    culture: {
      kicker: "Beyond Transport",
      title: "Experience the Soul of Kerala",
      description:
        "From Kathakali performances to temple elephant processions — let us help you discover Kerala's living traditions, not just its roads.",
      cta: "Plan a Cultural Tour",
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
      note: "A look at TravelSolutions' fleet, trips, and destinations.",
      empty: "No photos yet — check back soon.",
    },
    packagesPage: {
      title: "Tour Packages",
      note: "Holiday packages with transport, stay, and sightseeing arranged for you.",
      empty: "No tour packages published yet. Check back soon, or ask us directly on WhatsApp.",
      perPerson: "per person",
      days: "days",
      seatsLeft: "seats left",
      busLabel: "Bus",
      enquire: "Enquire",
    },
    hotelsPage: {
      title: "Hotels",
      note: "Partner hotels and rooms we can book for your trip.",
      empty: "No hotels published yet. Check back soon, or ask us directly on WhatsApp.",
      perNight: "per night",
      roomsLeft: "rooms available",
      enquire: "Enquire",
    },
    fleetEmpty: "Our fleet listing is being updated — contact us directly on WhatsApp or call for current vehicles and rates.",
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
        "TravelSolutions is a travel company based in Elavaramkuzhi, Velakkupara, Anchal — bus & minibus hire, tour packages, flight tickets, and hotel bookings across the region.",
      quickLinks: "Quick Links",
      ourServices: "Our Services",
      contact: "Contact",
      rights: "All rights reserved.",
    },
    whatsapp: {
      default: "Hi TravelSolutions, I'd like to enquire about a bus booking.",
      vehicle: (name, seats) => `Hi TravelSolutions, I'd like to enquire about the ${name} (${seats}).`,
      destination: (name) => `Hi TravelSolutions, I'd like to enquire about a tour package to ${name}.`,
      culture: "Hi TravelSolutions, I'd like to enquire about a cultural tour package.",
      package: (title) => `Hi TravelSolutions, I'd like to enquire about the "${title}" tour package.`,
      hotel: (name, room) => `Hi TravelSolutions, I'd like to enquire about ${name} — ${room}.`,
    },
  },
  ml: {
    nav: {
      home: "ഹോം",
      fleet: "വാഹനങ്ങളും നിരക്കും",
      packages: "പാക്കേജുകൾ",
      hotels: "ഹോട്ടലുകൾ",
      gallery: "ഗാലറി",
      contact: "ബന്ധപ്പെടുക",
      callNow: "ഇപ്പോൾ വിളിക്കൂ",
    },
    hero: {
      badge: "അഞ്ചൽ ആസ്ഥാനം",
      headingPrefix: "എല്ലാ അവസരങ്ങൾക്കും",
      headingHighlight: "സുഖകരമായ യാത്രകൾ",
      description:
        "Elavaramkuzhi, Velakkupara, അഞ്ചൽ ആസ്ഥാനമായി പ്രവർത്തിക്കുന്ന ഒരു യാത്രാ സ്ഥാപനമാണ് TravelSolutions — വിവാഹങ്ങൾ, സ്കൂൾ & കോളേജ് യാത്രകൾ, തീർത്ഥാടനങ്ങൾ, സാമൂഹിക ടൂറുകൾ എന്നിവയ്ക്കുള്ള ബസ് & മിനി ബസ് സർവീസിനൊപ്പം ഹോളിഡേ ടൂർ പാക്കേജുകളും ഫ്ലൈറ്റ് ടിക്കറ്റും ഹോട്ടൽ ബുക്കിംഗും ഞങ്ങൾ ഒരുക്കുന്നു.",
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
    destinations: {
      kicker: "കേരളം കാണാം",
      title: "ജനപ്രിയ കേരള ലക്ഷ്യസ്ഥാനങ്ങൾ",
      enquire: "അന്വേഷിക്കൂ",
    },
    packagesSection: {
      kicker: "ടൂർ പാക്കേജുകൾ",
      title: "തിരഞ്ഞെടുത്ത ഹോളിഡേ പാക്കേജുകൾ",
      viewAll: "എല്ലാ പാക്കേജുകളും കാണൂ",
    },
    hotelsSection: {
      kicker: "ഹോട്ടൽ താമസം",
      title: "പങ്കാളി ഹോട്ടലുകളും മുറികളും",
      viewAll: "എല്ലാ ഹോട്ടലുകളും കാണൂ",
    },
    culture: {
      kicker: "യാത്രയ്ക്കപ്പുറം",
      title: "കേരളത്തിന്റെ ആത്മാവ് അനുഭവിക്കൂ",
      description:
        "കഥകളി അവതരണങ്ങൾ മുതൽ ക്ഷേത്ര ആനയൂട്ടുകൾ വരെ — കേരളത്തിന്റെ ജീവസ്സുറ്റ പാരമ്പര്യങ്ങൾ അറിയാൻ ഞങ്ങൾ സഹായിക്കാം.",
      cta: "ഒരു സാംസ്കാരിക ടൂർ പ്ലാൻ ചെയ്യൂ",
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
      note: "TravelSolutions-ന്റെ വാഹനവ്യൂഹം, യാത്രകൾ, ലക്ഷ്യസ്ഥാനങ്ങൾ എന്നിവയുടെ ഒരു കാഴ്ച.",
      empty: "ഇതുവരെ ഫോട്ടോകൾ ഇല്ല — ഉടൻ വീണ്ടും പരിശോധിക്കൂ.",
    },
    packagesPage: {
      title: "ടൂർ പാക്കേജുകൾ",
      note: "യാത്ര, താമസം, കാഴ്ചകൾ എല്ലാം ക്രമീകരിച്ച ഹോളിഡേ പാക്കേജുകൾ.",
      empty: "ഇതുവരെ ടൂർ പാക്കേജുകൾ പ്രസിദ്ധീകരിച്ചിട്ടില്ല. ഉടൻ വീണ്ടും പരിശോധിക്കൂ, അല്ലെങ്കിൽ വാട്ട്സ്ആപ്പിൽ നേരിട്ട് ചോദിക്കൂ.",
      perPerson: "ഒരാൾക്ക്",
      days: "ദിവസം",
      seatsLeft: "സീറ്റുകൾ ബാക്കി",
      busLabel: "ബസ്",
      enquire: "അന്വേഷിക്കൂ",
    },
    hotelsPage: {
      title: "ഹോട്ടലുകൾ",
      note: "നിങ്ങളുടെ യാത്രയ്ക്കായി ഞങ്ങൾക്ക് ബുക്ക് ചെയ്യാവുന്ന പങ്കാളി ഹോട്ടലുകളും മുറികളും.",
      empty: "ഇതുവരെ ഹോട്ടലുകൾ പ്രസിദ്ധീകരിച്ചിട്ടില്ല. ഉടൻ വീണ്ടും പരിശോധിക്കൂ, അല്ലെങ്കിൽ വാട്ട്സ്ആപ്പിൽ നേരിട്ട് ചോദിക്കൂ.",
      perNight: "ഒരു രാത്രിക്ക്",
      roomsLeft: "മുറികൾ ലഭ്യം",
      enquire: "അന്വേഷിക്കൂ",
    },
    fleetEmpty: "ഞങ്ങളുടെ വാഹനവ്യൂഹം പട്ടിക പുതുക്കിക്കൊണ്ടിരിക്കുന്നു — നിലവിലെ വാഹനങ്ങൾക്കും നിരക്കുകൾക്കും വാട്ട്സ്ആപ്പിൽ നേരിട്ട് ബന്ധപ്പെടുക അല്ലെങ്കിൽ വിളിക്കുക.",
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
        "Elavaramkuzhi, Velakkupara, അഞ്ചൽ ആസ്ഥാനമായി പ്രവർത്തിക്കുന്ന ഒരു യാത്രാ സ്ഥാപനമാണ് TravelSolutions — ബസ് & മിനി ബസ് വാടക, ടൂർ പാക്കേജുകൾ, ഫ്ലൈറ്റ് ടിക്കറ്റ്, ഹോട്ടൽ ബുക്കിംഗ് എന്നിവ ഈ പ്രദേശത്തുടനീളം നൽകുന്നു.",
      quickLinks: "ക്വിക്ക് ലിങ്കുകൾ",
      ourServices: "ഞങ്ങളുടെ സേവനങ്ങൾ",
      contact: "ബന്ധപ്പെടാൻ",
      rights: "എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം.",
    },
    whatsapp: {
      default: "ഹായ് TravelSolutions, ഒരു ബസ് ബുക്കിംഗ് സംബന്ധിച്ച് അന്വേഷിക്കാൻ ആഗ്രഹിക്കുന്നു.",
      vehicle: (name, seats) => `ഹായ് TravelSolutions, ${name} (${seats}) സംബന്ധിച്ച് അന്വേഷിക്കാൻ ആഗ്രഹിക്കുന്നു.`,
      destination: (name) => `ഹായ് TravelSolutions, ${name}-ലേക്കുള്ള ഒരു ടൂർ പാക്കേജ് സംബന്ധിച്ച് അന്വേഷിക്കാൻ ആഗ്രഹിക്കുന്നു.`,
      culture: "ഹായ് TravelSolutions, ഒരു സാംസ്കാരിക ടൂർ പാക്കേജ് സംബന്ധിച്ച് അന്വേഷിക്കാൻ ആഗ്രഹിക്കുന്നു.",
      package: (title) => `ഹായ് TravelSolutions, "${title}" ടൂർ പാക്കേജ് സംബന്ധിച്ച് അന്വേഷിക്കാൻ ആഗ്രഹിക്കുന്നു.`,
      hotel: (name, room) => `ഹായ് TravelSolutions, ${name} — ${room} സംബന്ധിച്ച് അന്വേഷിക്കാൻ ആഗ്രഹിക്കുന്നു.`,
    },
  },
};

export default translations;
