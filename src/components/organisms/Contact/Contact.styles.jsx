import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3em 0 5em;
  background-color: ${({ theme }) => theme.colors.darkBlue};

  h2,
  p {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const InfoContent = styled.p`
  display: inline;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const WhiteIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const ContactBlock = styled.div`
  margin-bottom: 1em;
  text-align: center;
`;
