import munnarImg from "../assest/images/travelfox/munnar-tea-gardens.jpg";
import alappuzhaImg from "../assest/images/travelfox/alleppey-backwater-aerial.jpg";

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
];

export default destinationsData;
