import styled from "styled-components";
import mq from "@assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  max-width: 90%;
  height: 100vh;

  ${mq[1]} {
    max-width: 80%;
  }

  ${mq[2]} {
    max-width: 70%;
  }
`;

export const Header = styled.h2`
  font-size: 8rem;
  font-family: "Sofia Sans Extra Condensed", sans-serif;
`;

export const Text = styled.p`
  margin-bottom: 1em;
  font-size: 1.5rem;
`;

export const ButtonLink = styled.a`
  padding: 0.5em 2em;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 5px 5px 15px 0px ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;
