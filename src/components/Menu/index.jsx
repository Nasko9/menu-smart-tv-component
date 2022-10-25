import React from "react";
import {
  init,
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";

// Components
import MenuItem from "./MenuItem";

// Styles
import "./index.css";
import { useEffect } from "react";

init({});

export default function Menu({ data, focusKey: focusKeyParam }) {
  const { ref, focusSelf, hasFocusedChild, focusKey } = useFocusable({
    focusable: true,
    saveLastFocusedChild: false,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: focusKeyParam,
    preferredChildFocusKey: null,
    onEnterPress: () => {},
    onEnterRelease: () => {},
    onArrowPress: () => true,
    onFocus: () => {},
    onBlur: () => {},
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div
        className="menu"
        ref={ref}
        hasfocusedchild={hasFocusedChild.toString()}
      >
        {data.map((singleData) => (
          <MenuItem key={singleData.id} {...singleData} />
        ))}
      </div>
    </FocusContext.Provider>
  );
}
