import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mq from "@assets/styles/responsiveDesign";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em 0 5em;
`;

export const WebMap = styled.iframe`
  width: 80%;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.gray};

  ${mq[2]} {
    width: 70%;
  }

  ${mq[3]} {
    width: 50%;
  }
`;

export const MapInfo = styled.p`
  font-size: 2rem;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const MapDot = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
  ${({ theme }) => theme.colors.gray};
  font-size: 2rem;
`;
