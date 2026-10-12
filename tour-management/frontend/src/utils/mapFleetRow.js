// Adapts a Supabase `fleet_vehicles` row (+ attached images) into the shape
// FleetCard expects (the same shape the old static data/fleet.js used).
const mapFleetRow = (row) => ({
  id: row.id,
  name: { en: row.name_en, ml: row.name_ml },
  seats: { en: row.seats_en, ml: row.seats_ml },
  img: row.images?.[0],
  startingPrice: `₹${row.offer_rate || row.regular_rate}`,
  priceUnit: { en: "/ km", ml: "/ കി.മീ" },
  minimumNote:
    row.minimum_km && row.minimum_fare
      ? {
          en: `Min. ${row.minimum_km} km · ₹${row.minimum_fare}`,
          ml: `കുറഞ്ഞത് ${row.minimum_km} കി.മീ · ₹${row.minimum_fare}`,
        }
      : null,
  features: { en: row.inclusions_en || [], ml: row.inclusions_ml || [] },
  popular: false,
});

export default mapFleetRow;
