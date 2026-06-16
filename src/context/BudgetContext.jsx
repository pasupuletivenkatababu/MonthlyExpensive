import React, { createContext, useContext, useReducer, useMemo } from "react";
import { categoryMeta } from "../utils/helpers";

const BudgetContext = createContext(null);

const initialState = {
  budget: 30000,
  expenses: [
    { id: 1, name: "House rent", category: "rent", amount: 12000, date: "2026-06-01" },
    { id: 2, name: "Monthly groceries", category: "groceries", amount: 4500, date: "2026-06-03" },
    { id: 3, name: "Electricity bill", category: "utilities", amount: 1500, date: "2026-06-05" },
    { id: 4, name: "Petrol", category: "transport", amount: 2000, date: "2026-06-07" },
  ],
};

function budgetReducer(state, action) {
  switch (action.type) {
    case "SET_BUDGET":
      return { ...state, budget: action.payload };
    case "ADD_EXPENSE":
      return { ...state, expenses: [{ id: Date.now(), ...action.payload }, ...state.expenses] };
    case "DELETE_EXPENSE":
      return { ...state, expenses: state.expenses.filter((e) => e.id !== action.payload) };
    default:
      return state;
  }
}

export function BudgetProvider({ children }) {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const totalSpent = useMemo(
    () => state.expenses.reduce((sum, e) => sum + Number(e.amount), 0),
    [state.expenses]
  );

  const remaining = state.budget - totalSpent;
  const percentUsed = state.budget > 0 ? Math.min(100, Math.round((totalSpent / state.budget) * 100)) : 0;

  const byCategory = useMemo(() => {
    const map = {};
    state.expenses.forEach((e) => {
      map[e.category] = (map[e.category] || 0) + Number(e.amount);
    });
    return Object.entries(map).map(([id, value]) => ({
      id,
      name: categoryMeta(id).label,
      value,
      color: categoryMeta(id).color,
    }));
  }, [state.expenses]);

  const value = {
    ...state,
    totalSpent,
    remaining,
    percentUsed,
    byCategory,
    setBudget: (amount) => dispatch({ type: "SET_BUDGET", payload: amount }),
    addExpense: (expense) => dispatch({ type: "ADD_EXPENSE", payload: expense }),
    deleteExpense: (id) => dispatch({ type: "DELETE_EXPENSE", payload: id }),
  };

  return <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>;
}

export const useBudget = () => useContext(BudgetContext);