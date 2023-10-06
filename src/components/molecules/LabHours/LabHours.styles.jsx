import styled from "styled-components";
import mq from "@assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  margin-bottom: 1.5em;

  ${mq[1]} {
    font-size: 1.7rem;
  }

  ${mq[2]} {
    font-size: 2rem;
  }
`;
