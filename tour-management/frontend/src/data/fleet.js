import miniBusImg from "../assest/images/travelfox/fleet-minibus.jpg";
import busImg from "../assest/images/travelfox/india-bus-jyoti-travels.jpg";
import largeBusImg from "../assest/images/travelfox/india-bus-orange-state.jpg";

// Starting prices are approximate placeholders — update with TravelSolutions's real rates.
const fleetData = [
  {
    id: "mini-bus",
    name: { en: "Mini Bus", ml: "മിനി ബസ്" },
    seats: { en: "20 Seater", ml: "20 സീറ്റർ" },
    img: miniBusImg,
    startingPrice: "₹8,000",
    priceUnit: { en: "/ day (within district)", ml: "/ ദിവസം (ജില്ലയ്ക്കുള്ളിൽ)" },
    features: {
      en: [
        "Ideal for small family groups & short trips",
        "Experienced local driver included",
        "Music system & comfortable seating",
      ],
      ml: [
        "ചെറിയ കുടുംബ സംഘങ്ങൾക്കും ഹ്രസ്വ യാത്രകൾക്കും അനുയോജ്യം",
        "പരിചയസമ്പന്നനായ ലോക്കൽ ഡ്രൈവർ ഉൾപ്പെടെ",
        "മ്യൂസിക് സിസ്റ്റവും സുഖകരമായ സീറ്റിംഗും",
      ],
    },
  },
  {
    id: "bus",
    name: { en: "Bus", ml: "ബസ്" },
    seats: { en: "35 Seater", ml: "35 സീറ്റർ" },
    img: busImg,
    startingPrice: "₹12,000",
    priceUnit: { en: "/ day (within district)", ml: "/ ദിവസം (ജില്ലയ്ക്കുള്ളിൽ)" },
    features: {
      en: [
        "Perfect for school trips & group tours",
        "Spacious luggage carrier",
        "Available for multi-day pilgrimage tours",
      ],
      ml: [
        "സ്കൂൾ യാത്രകൾക്കും ഗ്രൂപ്പ് ടൂറുകൾക്കും അനുയോജ്യം",
        "വിശാലമായ ലഗേജ് കാരിയർ",
        "ബഹുദിന തീർത്ഥാടന യാത്രകൾക്ക് ലഭ്യം",
      ],
    },
    popular: true,
  },
  {
    id: "large-bus",
    name: { en: "Large Bus", ml: "വലിയ ബസ്" },
    seats: { en: "45 Seater", ml: "45 സീറ്റർ" },
    img: largeBusImg,
    startingPrice: "₹16,000",
    priceUnit: { en: "/ day (within district)", ml: "/ ദിവസം (ജില്ലയ്ക്കുള്ളിൽ)" },
    features: {
      en: [
        "Best for weddings & large community tours",
        "Decoration-friendly for marriage functions",
        "Long-distance & multi-day packages available",
      ],
      ml: [
        "വിവാഹങ്ങൾക്കും വലിയ സാമൂഹിക ടൂറുകൾക്കും മികച്ചത്",
        "വിവാഹാലങ്കാരത്തിന് അനുയോജ്യം",
        "ദീർഘദൂര & ബഹുദിന പാക്കേജുകൾ ലഭ്യം",
      ],
    },
  },
];

export default fleetData;
