import React from "react";

// Styles
import "./index.css";

export default function Card({ title, logo }) {
  return (
    <div className="card">
      {/* {title}{" "} */}
      <div>{logo}</div>
    </div>
  );
}
