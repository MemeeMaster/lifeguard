import styled from "styled-components";
import WavesSvg from "../../../assets/images/waves2.svg";
import mq from "../../../assets/styles/responsiveDesign";

export const StyledWave = styled.div`
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${WavesSvg});

  ${mq[2]} {
    aspect-ratio: 960/250;
  }
`;
