import React, { useState, createContext } from "react";

export const OpenNav = createContext({
  open: false,
  handleOpen: () => {},
  handleKeyDown: () => {},
});

const OpenNavContext = ({ children }) => {
  const [open, setOpen] = useState();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleKeyDown = (e) => {
    e.key === "Enter" ? handleOpen() : null;
  };

  return (
    <OpenNav.Provider value={{ open, handleOpen, handleKeyDown }}>
      {children}
    </OpenNav.Provider>
  );
};

export default OpenNavContext;
