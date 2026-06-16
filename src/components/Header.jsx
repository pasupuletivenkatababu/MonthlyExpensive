import React, { useState } from "react";

const MONTHS = [
  "January 2026", "February 2026", "March 2026", "April 2026", "May 2026", "June 2026",
  "July 2026", "August 2026", "September 2026", "October 2026", "November 2026", "December 2026",
];

export default function Header() {
  const [month, setMonth] = useState("June 2026");

  return (
    <header className="ledger-header">
      <div>
        <p className="ledger-eyebrow">Monthly ledger</p>
        <h1 className="ledger-title">Where it all went</h1>
      </div>
      <select className="ledger-month-select" value={month} onChange={(e) => setMonth(e.target.value)}>
        {MONTHS.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
    </header>
  );
}