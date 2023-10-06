import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundPhoto from "@assets/images/hospital-large.jpg";
import mq from "@assets/styles/responsiveDesign";

const pointDown = keyframes`
    from {
        transform: translate(0, 0);
    } to {
        transform: translate(0, 0.5em);
    }
`;

export const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${BackgroundPhoto});
  background-position: center;
  background-size: cover;
`;

export const ShadowBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-family: "Sofia Sans Extra Condensed", sans-serif;
  background-color: ${({ theme }) => theme.colors.shadow};
  color: ${({ theme }) => theme.colors.white};

  h1 {
    font-size: 6rem;
    font-weight: bold;

    ${mq[1]} {
      font-size: 7rem;
    }

    ${mq[2]} {
      font-size: 9rem;
    }
  }

  p {
    font-size: 2.5rem;

    ${mq[2]} {
      font-size: 3.2rem;
    }
  }

  a {
    position: absolute;
    bottom: 2em;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  padding: 0.5em;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 3rem;
  cursor: pointer;
  animation: ${pointDown} 0.5s ease-in-out infinite alternate;
`;
