import React from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

// Styles
import "./index.css";

export default function MenuItem({ title }) {
  const { ref, focused } = useFocusable();

  return (
    <div
      className={focused ? "active" : "item"}
      ref={ref}
      focused={focused.toString()}
    >
      {title}
    </div>
  );
}
