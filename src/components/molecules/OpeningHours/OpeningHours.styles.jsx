import styled from "styled-components";
import mq from "@assets/styles/responsiveDesign";

export const Wrapper = styled.section`
  padding: 10em 0 3em;

  ${mq[2]} {
    padding: 10em 0 0;
    margin: auto;
    max-width: 60%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const SectionWrap = styled.div`
  flex-basis: 100%;
`;
