import React, { useState } from "react";
import { useBudget } from "../context/BudgetContext";
import { CATEGORIES } from "../utils/helpers";

export default function AddExpenseForm() {
  const { addExpense } = useBudget();
  const [form, setForm] = useState({
    name: "",
    category: CATEGORIES[0].id,
    amount: "",
    date: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.amount || Number(form.amount) <= 0) return;
    addExpense({ ...form, amount: Number(form.amount) });
    setForm({ ...form, name: "", amount: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2 className="section-title">Add an expense</h2>
      <div className="expense-form-row">
        <input
          type="text"
          placeholder="What did you spend on?"
          value={form.name}
          onChange={handleChange("name")}
          className="expense-input"
          style={{ flex: 2 }}
        />
        <select value={form.category} onChange={handleChange("category")} className="expense-input" style={{ flex: 1 }}>
          {CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>{c.label}</option>
          ))}
        </select>
      </div>
      <div className="expense-form-row">
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange("amount")}
          className="expense-input expense-input--amount"
          min="0"
        />
        <input
          type="date"
          value={form.date}
          onChange={handleChange("date")}
          className="expense-input expense-input--date"
        />
        <button type="submit" className="btn-primary">Add expense</button>
      </div>
    </form>
  );
}