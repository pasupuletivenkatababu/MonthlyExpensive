import React from "react";
import { useBudget } from "../context/BudgetContext";
import { categoryMeta, formatCurrency } from "../utils/helpers";

export default function ExpenseItem({ expense }) {
  const { deleteExpense } = useBudget();
  const meta = categoryMeta(expense.category);

  return (
    <div className="expense-row">
      <span className="category-dot" style={{ background: meta.color }} />
      <div className="expense-info">
        <p className="expense-name">{expense.name}</p>
        <p className="expense-meta">{meta.label} · {expense.date}</p>
      </div>
      <p className="expense-amount">{formatCurrency(expense.amount)}</p>
      <button onClick={() => deleteExpense(expense.id)} className="expense-delete-btn" aria-label="Delete expense">
        ✕
      </button>
    </div>
  );
}