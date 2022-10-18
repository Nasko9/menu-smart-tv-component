import React from "react";

// Components
import Card from "../Card";

// Styles
import "./index.css";

export default function Menu({ data }) {
  return (
    <div className="menu">
      {data.map((singleData) => (
        <Card key={singleData.id} {...singleData} />
      ))}
    </div>
  );
}
