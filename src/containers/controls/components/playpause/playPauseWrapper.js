import styled from "styled-components";

export const PlayPauseWrapper = styled.img`
  height: min(25vh, 25vw);
  width: min(25vh, 25vw);

  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  &:active {
    transform: scale(0.9);
  }
`;
