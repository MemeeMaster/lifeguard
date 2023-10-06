import React from "react";
import ScreenSizeContext from "./ScreenSizeContext";
import OpenNavContext from "./OpenNavContext";
import NavProvider from "./NavProvider";

const ContextProvider = ({ children }) => {
  return (
    <ScreenSizeContext>
      <OpenNavContext>
        <NavProvider>{children}</NavProvider>
      </OpenNavContext>
    </ScreenSizeContext>
  );
};

export default ContextProvider;
