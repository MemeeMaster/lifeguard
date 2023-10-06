import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
`;

export const Image = styled.img`
  height: 280px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: bold;
  text-align: center;
`;

export const Role = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
`;
