import styled from "styled-components";

export const SkipWrapper = styled.img`
  height: min(15vh, 15vw);
  width: min(15vh, 15vw);

  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  &:active {
    transform: scale(0.9);
  }
`;
