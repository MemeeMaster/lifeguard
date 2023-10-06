import styled from "styled-components";
import mq from "@assets/styles/responsiveDesign";

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

export const UpperSection = styled.div`
  padding: 3em 0;
  margin: 0 3em;
  display: flex;
  font-size: 1.5rem;

  ${mq[1]} {
    font-size: 1.7rem;
  }

  ${mq[2]} {
    margin: auto;
    text-align: center;
    width: 80%;
  }

  ${mq[3]} {
    width: 60%;
  }

  div {
    padding: 0 0.5em;
    flex-basis: 100%;
  }
`;

export const BottomSection = styled.div`
  p {
    padding: 0.5em 0;
    margin: 0 3em;
    font-size: 1.5rem;
    text-align: center;
    border-top: 2px solid ${({ theme }) => theme.colors.white};
  }
`;

export const NameBlock = styled.div`
  h3 {
    font-size: 3rem;
    font-family: "Sofia Sans Extra Condensed", sans-serif;
  }

  p {
    font-size: 1.4rem;

    ${mq[1]} {
      font-size: 1.7rem;
    }
  }
`;

export const NavBlock = styled.div`
  a {
    display: block;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const BlockHeader = styled.p`
  font-weight: bold;
  text-transform: uppercase;
`;

export const ContactContent = styled.p`
  margin-bottom: 0.5em;
`;
