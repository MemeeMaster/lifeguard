import styled from "styled-components";
import mq from "@assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};

  ${mq[2]} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const UnitsBlock = styled.div`
  padding: 5em 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${mq[2]} {
    max-width: 70%;
  }
`;
