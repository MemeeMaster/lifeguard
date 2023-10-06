import styled from "styled-components";
import mq from "../../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  width: 100%;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  border-top: 2px solid ${({ theme }) => theme.colors.darkBlue};

  ${mq[1]} {
    font-size: 1.4rem;
  }

  ${mq[2]} {
    font-size: 1.7rem;
  }
`;

export const Button = styled.button`
  padding: 0.3em;
  margin-left: 1em;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.darkBlue};
  border-radius: 5px;
  transition: background-color 0.2s;

  ${mq[2]} {
    font-size: 1.7rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;
