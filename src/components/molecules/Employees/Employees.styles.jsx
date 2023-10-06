import styled from "styled-components";
import mq from "@assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  padding: 5em 0;
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin: 0 0.5em;
  padding: 0.5em 1em;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.colors.gray};
  background-color: transparent;
  font-size: 1.4rem;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Title = styled.h2`
  padding-bottom: 1em;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: bold;
`;

export const EmployeeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq[2]} {
    width: 80%;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }

  ${mq[2]} {
    width: 70%;
  }
`;
