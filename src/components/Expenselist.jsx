import React, { useState } from "react";
import { useBudget } from "../context/BudgetContext";
import CategoryFilter from "./CategoryFilter";
import ExpenseItem from "./ExpenseItem";
import EmptyState from "./EmptyState";

export default function ExpenseList() {
  const { expenses } = useBudget();
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? expenses : expenses.filter((e) => e.category === filter);
  const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="expense-list-section">
      <h2 className="section-title">Expenses</h2>
      <CategoryFilter active={filter} onChange={setFilter} />
      {sorted.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="expense-list">
          {sorted.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </div>
      )}
    </section>
  );
}