import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackButton = styled(Link)`
  padding: 0.5em 2em;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 5px 5px 15px 0px ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;
