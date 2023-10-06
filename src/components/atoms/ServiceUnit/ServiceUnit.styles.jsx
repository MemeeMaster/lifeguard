import styled from "styled-components";
import mq from "../../../assets/styles/responsiveDesign";
import Image from "../../../assets/images/hospital-small.jpg";

export const Box = styled.div`
  position: relative;
  margin: 1em;
  border: 1px solid ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  aspect-ratio: 1/1;
  transition: transform 0.3s, box-shadow 0.3s, background-image 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
    background-image: url(${Image});
    background-position: center;
    background-size: cover;
  }

  p {
    position: relative;
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    z-index: 10;

    &:hover + div {
      background-color: ${({ theme }) => theme.colors.shadow};
    }

    &::after,
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      height: 3px;
      width: 60%;
      background-color: ${({ theme }) => theme.colors.white};
      transform: translate(-50%, 0);
    }

    &::after {
      bottom: 130%;
    }

    &::before {
      top: 130%;
    }

    ${mq[1]} {
      font-size: 2.6rem;
    }
  }

  ${mq[1]} {
    width: 300px;
  }
`;

export const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.shadow};
  }
`;
