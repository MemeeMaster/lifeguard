import styled from "styled-components";

export const Wrapper = styled.nav`
  padding: 2em;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 10;
  transition: transform 0.3s, background-color 0.3s;

  background-color: ${({ theme, show, scroll }) => {
    if (!show || scroll === 0) return "transparent";
    else return theme.colors.darkerShadow;
  }};
  transform: ${({ show }) => {
    if (show) return "none";
    else return "translate3d(0, -100%, 0)";
  }};
`;
