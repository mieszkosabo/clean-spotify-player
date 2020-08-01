import styled from "styled-components";
import { theme } from "styled-tools";

export const ArtistWrapper = styled.div`
  color: ${theme("colors.mainColor")};
  font-family: ${theme("fonts.regular.fontFamily")};
  font-weight: ${theme("fonts.regular.fontWeight")};
  width: 100%;
  font-size: min(7vh, 7vw);
  text-align: center;
`;
