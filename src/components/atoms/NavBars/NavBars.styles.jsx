import styled from "styled-components";

export const Wrapper = styled.div`
  margin-right: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  width: 40px;
  height: 30px;
  cursor: pointer;

  &::after,
  &::before {
    position: absolute;
    content: "";
    background-color: ${({ theme, scroll, darkNav }) => {
      if (darkNav && scroll === 0) {
        return theme.colors.black;
      } else {
        return theme.colors.white;
      }
    }};
    height: 3px;
    transition: width 0.3s, background-color 0.3s;
  }

  &::after {
    top: 0;
    width: 100%;
  }

  &::before {
    bottom: 0;
    width: 30%;
  }

  &:hover::before,
  &:hover div {
    width: 100%;
  }
`;

export const Bar = styled.div`
  width: 65%;
  height: 3px;
  background-color: ${({ theme, scroll, darkNav }) => {
    if (darkNav && scroll === 0) return theme.colors.black;
    else return theme.colors.white;
  }};
  transition: width 0.3s, background-color 0.3s;
`;
