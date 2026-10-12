// Shared by the admin list/form and the public Packages page so both agree
// on when a package counts as cancelled/completed vs. still active.
export const getTripStatus = (row) => {
  if (!row) return "active";
  if (row.is_cancelled) return "cancelled";
  const today = new Date().toISOString().slice(0, 10);
  if (row.trip_date && row.trip_date < today) return "completed";
  return "active";
};

export const tripStatusLabel = {
  active: "Active",
  completed: "Completed",
  cancelled: "Cancelled",
};
