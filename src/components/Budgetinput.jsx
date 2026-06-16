import React, { useState } from "react";
import { useBudget } from "../context/BudgetContext";

export default function BudgetInput() {
  const { budget, setBudget } = useBudget();
  const [draft, setDraft] = useState(budget);

  const handleSave = () => {
    const num = Number(draft);
    if (!isNaN(num) && num >= 0) setBudget(num);
  };

  return (
    <div className="budget-input-row">
      <label className="budget-input-label" htmlFor="budget-amount">Monthly budget</label>
      <input
        id="budget-amount"
        type="number"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        className="budget-input-field"
        min="0"
      />
      <button onClick={handleSave} className="btn">Set</button>
    </div>
  );
}
