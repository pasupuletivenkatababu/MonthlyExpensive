import React from "react";
import "./index.css";
import { BudgetProvider } from "./context/BudgetContext";
import Header from "./components/Header";
import BudgetInput from "./components/BudgetInput";
import BudgetSummary from "./components/BudgetSummary";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseChart from "./components/ExpenseChart";
import Expenselist from "./components/Expenselist";

export default function App() {
  return (
    <BudgetProvider>
      <div className="ledger-page">
        <Header />
        <BudgetInput />
        <BudgetSummary />
        <AddExpenseForm />
        <ExpenseChart />
        <Expenselist />
      </div>
    </BudgetProvider>
  );
}