import munnarImg from "../assest/images/travelfox/munnar-tea-gardens.jpg";
import alappuzhaImg from "../assest/images/travelfox/alleppey-backwater-aerial.jpg";

// `img: null` entries don't have a photo yet — Home.jsx renders a branded
// placeholder for those instead of a broken <img>. Drop a real photo into
// assest/images/travelfox/ and import it here when one's available.
const destinationsData = [
  {
    id: "munnar",
    name: { en: "Munnar", ml: "മൂന്നാർ" },
    img: munnarImg,
    desc: {
      en: "Tea gardens, misty hills, and cool weather — a favourite for family and group getaways.",
      ml: "തേയിലത്തോട്ടങ്ങളും മഞ്ഞുമൂടിയ മലകളും തണുത്ത കാലാവസ്ഥയും — കുടുംബ, ഗ്രൂപ്പ് യാത്രകൾക്ക് പ്രിയപ്പെട്ട ഇടം.",
    },
  },
  {
    id: "alappuzha",
    name: { en: "Alappuzha", ml: "ആലപ്പുഴ" },
    img: alappuzhaImg,
    desc: {
      en: "Houseboat cruises through palm-lined backwaters — a classic Kerala experience.",
      ml: "തെങ്ങുനിറഞ്ഞ കായലുകളിലൂടെയുള്ള ഹൗസ്ബോട്ട് യാത്ര — കേരളത്തിന്റെ ക്ലാസിക് അനുഭവം.",
    },
  },
  {
    id: "goa",
    name: { en: "Goa", ml: "ഗോവ" },
    img: null,
    desc: {
      en: "Golden beaches, Portuguese-era churches, and a laid-back coastal vibe — perfect for a fun group getaway.",
      ml: "സ്വർണ്ണനിറമുള്ള കടൽത്തീരങ്ങളും പോർച്ചുഗീസ് കാലഘട്ടത്തിലെ പള്ളികളും സ്വസ്ഥമായ തീരദേശ അന്തരീക്ഷവും — രസകരമായ ഗ്രൂപ്പ് യാത്രയ്ക്ക് അനുയോജ്യം.",
    },
  },
  {
    id: "kodaikanal",
    name: { en: "Kodaikanal", ml: "കൊടൈക്കനാൽ" },
    img: null,
    desc: {
      en: "A serene hill station with a star-shaped lake, pine forests, and cool year-round weather.",
      ml: "നക്ഷത്രാകൃതിയിലുള്ള തടാകവും പൈൻ വനങ്ങളും വർഷം മുഴുവൻ തണുത്ത കാലാവസ്ഥയുമുള്ള ശാന്തമായ മലയോര പട്ടണം.",
    },
  },
  {
    id: "coorg",
    name: { en: "Coorg", ml: "കൂർഗ്" },
    img: null,
    desc: {
      en: "Coffee plantations, misty hills, and waterfalls — often called the Scotland of India.",
      ml: "കാപ്പിത്തോട്ടങ്ങളും മൂടൽമഞ്ഞ് മലകളും വെള്ളച്ചാട്ടങ്ങളും — ഇന്ത്യയുടെ സ്കോട്ട്ലൻഡ് എന്നറിയപ്പെടുന്ന സ്ഥലം.",
    },
  },
  {
    id: "ooty",
    name: { en: "Ooty", ml: "ഊട്ടി" },
    img: null,
    desc: {
      en: "The 'Queen of Hill Stations' — tea gardens, a toy train, and botanical gardens in the Nilgiris.",
      ml: "'ഹിൽ സ്റ്റേഷനുകളുടെ റാണി' — നീലഗിരിയിലെ തേയിലത്തോട്ടങ്ങളും ടോയ് ട്രെയിനും സസ്യോദ്യാനങ്ങളും.",
    },
  },
  {
    id: "vagamon",
    name: { en: "Vagamon", ml: "വാഗമൺ" },
    img: null,
    desc: {
      en: "Rolling meadows, pine forests, and paragliding — one of Kerala's most peaceful hill destinations.",
      ml: "പുൽമേടുകളും പൈൻ വനങ്ങളും പാരാഗ്ലൈഡിങ്ങും — കേരളത്തിലെ ഏറ്റവും ശാന്തമായ മലയോര കേന്ദ്രങ്ങളിലൊന്ന്.",
    },
  },
  {
    id: "ponmudi",
    name: { en: "Ponmudi", ml: "പൊന്മുടി" },
    img: null,
    desc: {
      en: "A quiet hill station near Thiruvananthapuram with winding roads, tea estates, and valley views.",
      ml: "തിരുവനന്തപുരത്തിനടുത്തുള്ള, വളഞ്ഞുപുളഞ്ഞ വഴികളും തേയിലത്തോട്ടങ്ങളും താഴ്‌വര കാഴ്ചകളുമുള്ള ശാന്തമായ മലയോര പ്രദേശം.",
    },
  },
  {
    id: "varkala",
    name: { en: "Varkala", ml: "വർക്കല" },
    img: null,
    desc: {
      en: "Dramatic cliffside beaches and a famous temple — a unique mix of sun, sea, and spirituality.",
      ml: "മലമുകളിൽ നിന്നുള്ള അതിമനോഹരമായ കടൽത്തീരവും പ്രശസ്തമായ ക്ഷേത്രവും — സൂര്യനും കടലും ആത്മീയതയും ഒന്നിക്കുന്ന സ്ഥലം.",
    },
  },
  {
    id: "sabarimala",
    name: { en: "Sabarimala", ml: "ശബരിമല" },
    img: null,
    desc: {
      en: "One of the world's largest pilgrimage sites, dedicated to Lord Ayyappa, deep in the Western Ghats.",
      ml: "പശ്ചിമഘട്ടത്തിന്റെ ഉൾഭാഗത്ത് സ്ഥിതി ചെയ്യുന്ന, അയ്യപ്പസ്വാമിക്ക് സമർപ്പിച്ചിരിക്കുന്ന ലോകത്തിലെ ഏറ്റവും വലിയ തീർത്ഥാടന കേന്ദ്രങ്ങളിലൊന്ന്.",
    },
  },
  {
    id: "guruvayur",
    name: { en: "Guruvayur", ml: "ഗുരുവായൂർ" },
    img: null,
    desc: {
      en: "A revered Krishna temple town, one of Kerala's most visited pilgrim centers.",
      ml: "കേരളത്തിലെ ഏറ്റവും കൂടുതൽ സന്ദർശിക്കപ്പെടുന്ന തീർത്ഥാടന കേന്ദ്രങ്ങളിലൊന്നായ, ശ്രീകൃഷ്ണ ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്ന പട്ടണം.",
    },
  },
  {
    id: "velankanni",
    name: { en: "Velankanni", ml: "വേളാങ്കണ്ണി" },
    img: null,
    desc: {
      en: "Home to the Basilica of Our Lady of Health — a major pilgrimage destination on the Tamil Nadu coast.",
      ml: "ആരോഗ്യമാതാവിന്റെ ബസിലിക്ക സ്ഥിതി ചെയ്യുന്ന, തമിഴ്‌നാട് തീരത്തെ പ്രധാന തീർത്ഥാടന കേന്ദ്രം.",
    },
  },
];

export default destinationsData;
