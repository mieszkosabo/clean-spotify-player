import styled from "styled-components";
import { theme } from "styled-tools";

export const ArtistWrapper = styled.div`
  color: ${theme("colors.mainColor")};
  font-family: ${theme("fonts.regular.fontFamily")};
  font-weight: ${theme("fonts.regular.fontWeight")};
  width: 100%;
  font-size: calc(100% + 4vh);
  text-align: center;
`;
