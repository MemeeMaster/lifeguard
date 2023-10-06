import styled from "styled-components";
import mq from "../../../assets/styles/responsiveDesign";

export const StyledTitle = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkBlue};

  ${mq[1]} {
    font-size: 3rem;
  }

  ${mq[2]} {
    font-size: 3.5rem;
  }
`;
