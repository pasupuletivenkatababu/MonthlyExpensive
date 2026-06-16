export const formatCurrency = (num) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(num || 0);

export const CATEGORIES = [
  { id: "rent", label: "Rent / housing", color: "#7F77DD" },
  { id: "groceries", label: "Groceries", color: "#1D9E75" },
  { id: "utilities", label: "Utilities", color: "#D85A30" },
  { id: "transport", label: "Transport / fuel", color: "#378ADD" },
  { id: "healthcare", label: "Healthcare", color: "#D4537E" },
  { id: "education", label: "Education", color: "#BA7517" },
  { id: "entertainment", label: "Entertainment", color: "#639922" },
  { id: "subscriptions", label: "Subscriptions", color: "#888780" },
  { id: "emi", label: "Loans / EMI", color: "#E24B4A" },
  { id: "misc", label: "Miscellaneous", color: "#5F5E5A" },
];

export const categoryMeta = (id) =>
  CATEGORIES.find((c) => c.id === id) || CATEGORIES[CATEGORIES.length - 1];