import React from "react";

const DashboardHeading = ({ title = "", desc = "", children }) => {
  return (
    <div className="flex items-start justify-between mb-10">
      <h1 className="dashboard-heading">{title}</h1>
      <p className="dashboard-short-desc">{desc}</p>
      {children}
    </div>
  );
};

export default DashboardHeading;
