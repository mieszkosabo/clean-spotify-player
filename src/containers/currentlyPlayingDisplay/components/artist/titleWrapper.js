import styled from "styled-components";
import { theme } from "styled-tools";

export const ArtistWrapper = styled.div`
  color: ${theme("colors.mainColor")};
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  width: 100%;
  font-size: min(5.5vh, 5.5vw);
  text-align: center;
  margin-bottom: 40px;
  letter-spacing: 7.8px;
  width: 850px;
`;
