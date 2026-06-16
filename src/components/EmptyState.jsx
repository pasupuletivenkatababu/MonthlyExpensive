import React from "react";

export default function EmptyState() {
  return (
    <div className="empty-state">
      <p className="empty-state-title">Nothing logged yet</p>
      <p className="empty-state-text">Add your first expense above to start tracking this month.</p>
    </div>
  );
}