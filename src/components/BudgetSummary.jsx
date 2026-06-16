import React from "react";
import { useBudget } from "../context/BudgetContext";
import { formatCurrency } from "../utils/Helpers";

function SummaryCard({ label, value, variant }) {
  const valueClass = variant ? `summary-value summary-value--${variant}` : "summary-value";
  return (
    <div className="summary-card">
      <p className="summary-label">{label}</p>
      <p className={valueClass}>{value}</p>
    </div>
  );
}

export default function BudgetSummary() {
  const { budget, totalSpent, remaining, percentUsed } = useBudget();
  const overBudget = remaining < 0;

  return (
    <section className="summary-grid">
      <SummaryCard label="Budget" value={formatCurrency(budget)} />
      <SummaryCard label="Spent" value={formatCurrency(totalSpent)} />
      <SummaryCard
        label={overBudget ? "Over by" : "Remaining"}
        value={formatCurrency(Math.abs(remaining))}
        variant={overBudget ? "bad" : "good"}
      />
      <div className="progress-card">
        <div className="progress-label-row">
          <span>Used</span>
          <span>{percentUsed}%</span>
        </div>
        <div className="progress-track">
          <div
            className={`progress-fill ${overBudget ? "progress-fill--over" : ""}`}
            style={{ width: `${percentUsed}%` }}
          />
        </div>
      </div>
    </section>
  );
}