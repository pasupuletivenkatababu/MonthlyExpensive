import React from "react";
import "./index.css";
import { BudgetProvider } from "./context/BudgetContext";
import Header from "./components/Header";
import Budgetinput from "./components/Budgetinput";
import BudgetSummary from "./components/BudgetSummary";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseChart from "./components/ExpenseChart";
import Expenselist from "./components/Expenselist";

export default function App() {
  return (
    <BudgetProvider>
      <div className="ledger-page">
        <Header />
        <Budgetinput />
        <BudgetSummary />
        <AddExpenseForm />
        <ExpenseChart />
        <Expenselist />
      </div>
    </BudgetProvider>
  );
}