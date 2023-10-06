import React, { useContext } from "react";
import Logo from "@components/atoms/Logo/Logo";
import { Wrapper, NavContainer, LinkWrapper } from "./DesktopNav.styles";
import { NavLink } from "react-router-dom";
import { Nav } from "@providers/NavProvider";

const DesktopNav = () => {
  const { scroll, show, darkNav } = useContext(Nav);

  return (
    <Wrapper scroll={scroll} show={show} darkNav={darkNav}>
      <NavContainer>
        <Logo scroll={scroll} darkNav={darkNav} />
        <LinkWrapper scroll={scroll} darkNav={darkNav}>
          <NavLink to="/">main page</NavLink>
          <a href="/#contact">contact</a>
          <NavLink to="/services">services</NavLink>
          <NavLink to="/team">team</NavLink>
        </LinkWrapper>
      </NavContainer>
    </Wrapper>
  );
};

export default DesktopNav;
