import styled from "styled-components";

export const Content = styled.h3`
  font-family: "Sofia Sans Extra Condensed", sans-serif;
  font-weight: bold;
  font-size: 3rem;
  cursor: pointer;
  color: ${({ theme, scroll, darkNav }) => {
    if (scroll === 0 && darkNav) return theme.colors.black;
    else return theme.colors.white;
  }};
  transition: color 0.3s;
`;
