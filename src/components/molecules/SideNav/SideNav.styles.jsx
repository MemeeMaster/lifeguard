import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) => {
    if (open) return 0;
    else return "-100%";
  }};
  width: 100%;
  height: 100vh;
  z-index: 100;
  transition: left 0.3s;
`;

export const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.shadow};
`;

export const NavBody = styled.div`
  position: relative;
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};

  a {
    font-size: 2.8rem;
    margin-bottom: 1em;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    transition: transform 0.3s, color 0.3s;

    &:hover {
      transform: scale(1.05);
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  svg {
    padding: 0.5em;
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 3rem;
    cursor: pointer;
    transition: transform 0.3s, color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
