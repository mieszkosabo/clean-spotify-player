import styled from "styled-components";
import { theme } from "styled-tools";

export const ArtistWrapper = styled.div`
  color: ${theme("colors.mainColor")};
  font-family: ${theme("fonts.regular.fontFamily")};
  font-weight: ${theme("fonts.regular.fontWeight")};
  font-size: 4vw;
  text-align: center;
`;
