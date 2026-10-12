// Field/table configuration for each admin-managed content type.
// EntityListPage / EntityFormPage render generically off these configs.
import { getTripStatus } from "../utils/tripStatus";

export const packagesConfig = {
  key: "packages",
  table: "packages",
  entityType: "package",
  basePath: "/admin/packages",
  label: "Tour Package",
  pluralLabel: "Tour Packages",
  titleOf: (row) => row.title_en || "(untitled)",
  metaOf: (row) =>
    `₹${row.offer_rate || row.regular_rate} · ${row.days} day${row.days === 1 ? "" : "s"} · ${
      row.available_seats
    }/${row.total_seats} seats${row.trip_date ? ` · ${row.trip_date}` : ""}`,
  // Active (upcoming), Completed (trip_date passed), or Cancelled (admin-set) —
  // used by EntityListPage to badge + gray out cards, and by the public
  // Packages page to do the same for visitors.
  statusOf: getTripStatus,
  defaults: {
    title_en: "",
    title_ml: "",
    description_en: "",
    description_ml: "",
    regular_rate: "",
    offer_rate: "",
    inclusions_en: [],
    inclusions_ml: [],
    days: 1,
    trip_date: "",
    bus_label: "",
    total_seats: "",
    available_seats: "",
    is_published: true,
    is_cancelled: false,
  },
  fields: [
    { key: "title_en", label: "Title (English)", type: "text", required: true },
    { key: "title_ml", label: "Title (Malayalam)", type: "text", required: true },
    { key: "description_en", label: "Description (English)", type: "textarea" },
    { key: "description_ml", label: "Description (Malayalam)", type: "textarea" },
    { key: "regular_rate", label: "Regular Rate (₹)", type: "number", required: true },
    { key: "offer_rate", label: "Offer Rate (₹, optional)", type: "number" },
    { key: "inclusions_en", label: "What's Included — English (one per line)", type: "stringlist" },
    { key: "inclusions_ml", label: "What's Included — Malayalam (one per line)", type: "stringlist" },
    { key: "days", label: "Trip Duration (days)", type: "number", required: true },
    { key: "trip_date", label: "Trip Date", type: "date" },
    { key: "bus_label", label: "Assigned Bus (e.g. \"35 Seater Bus\")", type: "text" },
    { key: "total_seats", label: "Total Seats", type: "number", required: true },
    { key: "available_seats", label: "Available Seats", type: "number", required: true },
    { key: "is_published", label: "Published (visible on site)", type: "checkbox" },
    { key: "is_cancelled", label: "Cancel this trip", type: "checkbox" },
  ],
};

export const hotelsConfig = {
  key: "hotels",
  table: "hotel_rooms",
  entityType: "hotel",
  basePath: "/admin/hotels",
  label: "Hotel Room",
  pluralLabel: "Hotel Rooms",
  titleOf: (row) => `${row.hotel_name || "(untitled hotel)"} — ${row.room_title_en || ""}`,
  metaOf: (row) =>
    `₹${row.offer_rate || row.regular_rate}/night · ${row.available_rooms}/${row.total_rooms} rooms available${
      row.location ? ` · ${row.location}` : ""
    }`,
  defaults: {
    hotel_name: "",
    room_title_en: "",
    room_title_ml: "",
    description_en: "",
    description_ml: "",
    location: "",
    regular_rate: "",
    offer_rate: "",
    inclusions_en: [],
    inclusions_ml: [],
    total_rooms: "",
    available_rooms: "",
    is_published: true,
  },
  fields: [
    { key: "hotel_name", label: "Hotel Name", type: "text", required: true },
    { key: "room_title_en", label: "Room Title (English)", type: "text", required: true },
    { key: "room_title_ml", label: "Room Title (Malayalam)", type: "text", required: true },
    { key: "location", label: "Location", type: "text" },
    { key: "description_en", label: "Description (English)", type: "textarea" },
    { key: "description_ml", label: "Description (Malayalam)", type: "textarea" },
    { key: "regular_rate", label: "Regular Rate per night (₹)", type: "number", required: true },
    { key: "offer_rate", label: "Offer Rate per night (₹, optional)", type: "number" },
    { key: "inclusions_en", label: "Amenities — English (one per line)", type: "stringlist" },
    { key: "inclusions_ml", label: "Amenities — Malayalam (one per line)", type: "stringlist" },
    { key: "total_rooms", label: "Total Rooms", type: "number", required: true },
    { key: "available_rooms", label: "Available Rooms", type: "number", required: true },
    { key: "is_published", label: "Published (visible on site)", type: "checkbox" },
  ],
};

export const fleetConfig = {
  key: "fleet",
  table: "fleet_vehicles",
  entityType: "fleet",
  basePath: "/admin/fleet",
  label: "Vehicle",
  pluralLabel: "Fleet (Buses & Mini Travellers)",
  titleOf: (row) => row.name_en || "(untitled)",
  metaOf: (row) =>
    `${row.seats_en} · ₹${row.offer_rate || row.regular_rate}/day · ${row.vehicle_type}`,
  defaults: {
    vehicle_type: "bus",
    name_en: "",
    name_ml: "",
    seats_en: "",
    seats_ml: "",
    regular_rate: "",
    offer_rate: "",
    inclusions_en: [],
    inclusions_ml: [],
    is_published: true,
  },
  fields: [
    {
      key: "vehicle_type",
      label: "Vehicle Type",
      type: "select",
      options: [
        { value: "mini-bus", label: "Mini Bus" },
        { value: "bus", label: "Bus" },
        { value: "large-bus", label: "Large Bus" },
        { value: "tempo-traveller", label: "Tempo Traveller / Mini Van" },
      ],
    },
    { key: "name_en", label: "Name (English)", type: "text", required: true },
    { key: "name_ml", label: "Name (Malayalam)", type: "text", required: true },
    { key: "seats_en", label: "Seats (English, e.g. \"20 Seater\")", type: "text", required: true },
    { key: "seats_ml", label: "Seats (Malayalam)", type: "text", required: true },
    { key: "regular_rate", label: "Regular Rate per day (₹)", type: "number", required: true },
    { key: "offer_rate", label: "Offer Rate per day (₹, optional)", type: "number" },
    { key: "inclusions_en", label: "Features — English (one per line)", type: "stringlist" },
    { key: "inclusions_ml", label: "Features — Malayalam (one per line)", type: "stringlist" },
    { key: "is_published", label: "Published (visible on site)", type: "checkbox" },
  ],
};

export const galleryConfig = {
  key: "gallery",
  table: "gallery_items",
  entityType: "gallery",
  basePath: "/admin/gallery",
  label: "Gallery Item",
  pluralLabel: "Gallery",
  titleOf: (row) => row.caption_en || "(no caption)",
  metaOf: (row) => row.category,
  defaults: {
    caption_en: "",
    caption_ml: "",
    category: "general",
    is_published: true,
  },
  fields: [
    { key: "caption_en", label: "Caption (English, optional)", type: "text" },
    { key: "caption_ml", label: "Caption (Malayalam, optional)", type: "text" },
    {
      key: "category",
      label: "Category",
      type: "select",
      options: [
        { value: "general", label: "General" },
        { value: "package", label: "Tour Package" },
        { value: "hotel", label: "Hotel" },
        { value: "fleet", label: "Fleet" },
      ],
    },
    { key: "is_published", label: "Published (visible on site)", type: "checkbox" },
  ],
};

export const allEntityConfigs = [packagesConfig, hotelsConfig, fleetConfig, galleryConfig];
