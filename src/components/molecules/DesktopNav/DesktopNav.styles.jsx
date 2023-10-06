import styled from "styled-components";
import mq from "@assets/styles/responsiveDesign";

export const Wrapper = styled.nav`
  padding: 1em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: ${({ theme, show, scroll }) => {
    if (!show || scroll === 0) return "transparent";
    else return theme.colors.darkerShadow;
  }};
  transform: ${({ show }) => {
    if (show) return "none";
    else return "translate3d(0, -100%, 0)";
  }};
  transition: transform 0.3s, background-color 0.3s;
`;

export const NavContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  max-width: 70%;
`;

export const LinkWrapper = styled.div`
  a {
    margin-left: 1em;
    font-size: 1.5rem;
    color: ${({ theme, scroll, darkNav }) => {
      if (scroll === 0 && darkNav) return theme.colors.black;
      else return theme.colors.white;
    }};
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }

    ${mq[2]} {
      font-size: 1.7rem;
    }
  }
`;
