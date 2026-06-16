import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { useBudget } from "../context/BudgetContext";
import { formatCurrency } from "../utils/Helpers";

export default function ExpenseChart() {
  const { byCategory, totalSpent } = useBudget();

  if (byCategory.length === 0) {
    return (
      <section className="chart-section">
        <h2 className="section-title">Spending breakdown</h2>
        <p className="empty-state-text">Add expenses to see your breakdown by category.</p>
      </section>
    );
  }

  return (
    <section className="chart-section">
      <h2 className="section-title">Spending breakdown</h2>
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={byCategory}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={2}
            >
              {byCategory.map((entry) => (
                <Cell key={entry.id} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip formatter={(value) => formatCurrency(value)} />
            <Legend wrapperStyle={{ fontSize: 13, fontFamily: "Inter, sans-serif" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="chart-total">Total spent: {formatCurrency(totalSpent)}</p>
    </section>
  );
}