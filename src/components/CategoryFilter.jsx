import React from "react";
import { CATEGORIES } from "../utils/Helpers";

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="filter-row">
      <button
        onClick={() => onChange("all")}
        className={`filter-chip ${active === "all" ? "filter-chip--active" : ""}`}
      >
        All
      </button>
      {CATEGORIES.map((c) => (
        <button
          key={c.id}
          onClick={() => onChange(c.id)}
          className={`filter-chip ${active === c.id ? "filter-chip--active" : ""}`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}