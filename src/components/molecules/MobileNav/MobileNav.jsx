import React, { useContext } from "react";
import { Wrapper } from "./MobileNav.styles";
import NavBars from "@components/atoms/NavBars/NavBars";
import Logo from "@components/atoms/Logo/Logo";
import { Nav } from "@providers/NavProvider";

const MobileNav = () => {
  const { scroll, show, darkNav } = useContext(Nav);

  return (
    <Wrapper scroll={scroll} show={show} darkNav={darkNav}>
      <NavBars scroll={scroll} darkNav={darkNav} />
      <Logo scroll={scroll} darkNav={darkNav} />
    </Wrapper>
  );
};

export default MobileNav;
