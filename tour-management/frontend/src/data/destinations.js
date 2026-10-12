import munnarImg from "../assest/images/travelfox/munnar-tea-gardens.jpg";
import alappuzhaImg from "../assest/images/travelfox/alleppey-backwater-aerial.jpg";

// Some entries below hotlink an Unsplash photo as a stand-in (via `?w=...`
// URL params, so the CDN serves an appropriately sized JPEG) — Unsplash's
// search doesn't tag photos by location, so these are a thematic match
// ("tea plantation", "cliffside beach house") rather than a confirmed photo
// of that exact place. A few destinations (Goa, Coorg, Guruvayur) had no
// decent free match at all, so `img: null` there — Home.jsx renders a
// branded placeholder instead of a broken/wrong <img>. Swap any of these
// for real photography whenever you have it, by importing a local file from
// assest/images/travelfox/ the same way Munnar/Alappuzha do above.
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
    img: "https://images.unsplash.com/photo-1594313059730-8d0a02f44847?w=800&h=600&fit=crop&q=70&auto=format",
    desc: {
      en: "Golden beaches, Portuguese-era churches, and a laid-back coastal vibe — perfect for a fun group getaway.",
      ml: "സ്വർണ്ണനിറമുള്ള കടൽത്തീരങ്ങളും പോർച്ചുഗീസ് കാലഘട്ടത്തിലെ പള്ളികളും സ്വസ്ഥമായ തീരദേശ അന്തരീക്ഷവും — രസകരമായ ഗ്രൂപ്പ് യാത്രയ്ക്ക് അനുയോജ്യം.",
    },
  },
  {
    id: "kodaikanal",
    name: { en: "Kodaikanal", ml: "കൊടൈക്കനാൽ" },
    img: "https://images.unsplash.com/photo-1590265787538-4dc8fdeb9651?w=800&h=600&fit=crop&q=70&auto=format",
    desc: {
      en: "A serene hill station with a star-shaped lake, pine forests, and cool year-round weather.",
      ml: "നക്ഷത്രാകൃതിയിലുള്ള തടാകവും പൈൻ വനങ്ങളും വർഷം മുഴുവൻ തണുത്ത കാലാവസ്ഥയുമുള്ള ശാന്തമായ മലയോര പട്ടണം.",
    },
  },
  {
    id: "coorg",
    name: { en: "Coorg", ml: "കൂർഗ്" },
    img: "https://images.unsplash.com/photo-1788097429655-670c7f8d79ea?w=800&h=600&fit=crop&q=70&auto=format",
    desc: {
      en: "Coffee plantations, misty hills, and waterfalls — often called the Scotland of India.",
      ml: "കാപ്പിത്തോട്ടങ്ങളും മൂടൽമഞ്ഞ് മലകളും വെള്ളച്ചാട്ടങ്ങളും — ഇന്ത്യയുടെ സ്കോട്ട്ലൻഡ് എന്നറിയപ്പെടുന്ന സ്ഥലം.",
    },
  },
  {
    id: "ooty",
    name: { en: "Ooty", ml: "ഊട്ടി" },
    img: "https://images.unsplash.com/photo-1722437716710-b6cfae6e541e?w=800&h=600&fit=crop&q=70&auto=format",
    desc: {
      en: "The 'Queen of Hill Stations' — tea gardens, a toy train, and botanical gardens in the Nilgiris.",
      ml: "'ഹിൽ സ്റ്റേഷനുകളുടെ റാണി' — നീലഗിരിയിലെ തേയിലത്തോട്ടങ്ങളും ടോയ് ട്രെയിനും സസ്യോദ്യാനങ്ങളും.",
    },
  },
  {
    id: "vagamon",
    name: { en: "Vagamon", ml: "വാഗമൺ" },
    img: "https://images.unsplash.com/photo-1659410371823-9dfb238ffdaf?w=800&h=600&fit=crop&q=70&auto=format",
    desc: {
      en: "Rolling meadows, pine forests, and paragliding — one of Kerala's most peaceful hill destinations.",
      ml: "പുൽമേടുകളും പൈൻ വനങ്ങളും പാരാഗ്ലൈഡിങ്ങും — കേരളത്തിലെ ഏറ്റവും ശാന്തമായ മലയോര കേന്ദ്രങ്ങളിലൊന്ന്.",
    },
  },
  {
    id: "ponmudi",
    name: { en: "Ponmudi", ml: "പൊന്മുടി" },
    img: "https://images.unsplash.com/photo-1616388969587-8196f32388b4?w=800&h=600&fit=crop&q=70&auto=format",
    desc: {
      en: "A quiet hill station near Thiruvananthapuram with winding roads, tea estates, and valley views.",
      ml: "തിരുവനന്തപുരത്തിനടുത്തുള്ള, വളഞ്ഞുപുളഞ്ഞ വഴികളും തേയിലത്തോട്ടങ്ങളും താഴ്‌വര കാഴ്ചകളുമുള്ള ശാന്തമായ മലയോര പ്രദേശം.",
    },
  },
  {
    id: "varkala",
    name: { en: "Varkala", ml: "വർക്കല" },
    img: "https://images.unsplash.com/photo-1708149995661-10ddb24e016e?w=800&h=600&fit=crop&q=70&auto=format",
    desc: {
      en: "Dramatic cliffside beaches and a famous temple — a unique mix of sun, sea, and spirituality.",
      ml: "മലമുകളിൽ നിന്നുള്ള അതിമനോഹരമായ കടൽത്തീരവും പ്രശസ്തമായ ക്ഷേത്രവും — സൂര്യനും കടലും ആത്മീയതയും ഒന്നിക്കുന്ന സ്ഥലം.",
    },
  },
  {
    id: "sabarimala",
    name: { en: "Sabarimala", ml: "ശബരിമല" },
    img: "https://images.unsplash.com/photo-1710439672382-87cab6b75e15?w=800&h=600&fit=crop&q=70&auto=format",
    desc: {
      en: "One of the world's largest pilgrimage sites, dedicated to Lord Ayyappa, deep in the Western Ghats.",
      ml: "പശ്ചിമഘട്ടത്തിന്റെ ഉൾഭാഗത്ത് സ്ഥിതി ചെയ്യുന്ന, അയ്യപ്പസ്വാമിക്ക് സമർപ്പിച്ചിരിക്കുന്ന ലോകത്തിലെ ഏറ്റവും വലിയ തീർത്ഥാടന കേന്ദ്രങ്ങളിലൊന്ന്.",
    },
  },
  {
    id: "guruvayur",
    name: { en: "Guruvayur", ml: "ഗുരുവായൂർ" },
    img: "https://images.unsplash.com/photo-1645441510555-ad67c4b5be0e?w=800&h=600&fit=crop&q=70&auto=format",
    desc: {
      en: "A revered Krishna temple town, one of Kerala's most visited pilgrim centers.",
      ml: "കേരളത്തിലെ ഏറ്റവും കൂടുതൽ സന്ദർശിക്കപ്പെടുന്ന തീർത്ഥാടന കേന്ദ്രങ്ങളിലൊന്നായ, ശ്രീകൃഷ്ണ ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്ന പട്ടണം.",
    },
  },
  {
    id: "velankanni",
    name: { en: "Velankanni", ml: "വേളാങ്കണ്ണി" },
    img: "https://images.unsplash.com/photo-1734332673393-8ebc639adde2?w=800&h=600&fit=crop&q=70&auto=format",
    desc: {
      en: "Home to the Basilica of Our Lady of Health — a major pilgrimage destination on the Tamil Nadu coast.",
      ml: "ആരോഗ്യമാതാവിന്റെ ബസിലിക്ക സ്ഥിതി ചെയ്യുന്ന, തമിഴ്‌നാട് തീരത്തെ പ്രധാന തീർത്ഥാടന കേന്ദ്രം.",
    },
  },
];

export default destinationsData;
