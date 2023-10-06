import React, { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";

export const Nav = createContext({
  scroll: 0,
  show: true,
  darkNav: false,
});

const NavProvider = ({ children }) => {
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [darkNav, setDarkNav] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScroll) setShow(false);
      else setShow(true);

      setLastScroll(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScroll]);

  useEffect(() => {
    if (location.pathname !== "/") setDarkNav(true);
    else setDarkNav(false);

    if (!location.hash) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <Nav.Provider value={{ scroll: lastScroll, show, darkNav }}>
      {children}
    </Nav.Provider>
  );
};

export default NavProvider;
