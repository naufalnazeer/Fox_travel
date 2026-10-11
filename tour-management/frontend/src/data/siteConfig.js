// Single source of truth for TravelSolutions's contact & brand details.
// Replace the placeholder values below once the real details are available.
const siteConfig = {
  businessName: "TravelSolutions",
  tagline: "Your trusted travel partner in Anchal",
  phone: "+91 81380 63306",
  phoneDisplay: "+91 81380 63306",
  whatsappNumber: "918138063306", // digits only, country code first, used for wa.me links
  email: "info@travelsolutions.example",
  address: {
    line1: "Elavaramkuzhi, Velakupara",
    line2: "Anchal, Kollam, Kerala",
  },
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
};

export const whatsappLink = (message) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const callLink = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
export const emailLink = `mailto:${siteConfig.email}`;

export default siteConfig;
