import styled from "styled-components";
import { theme } from "styled-tools";

export const ArtistWrapper = styled.div`
  color: ${theme('colors.text.artist')};
  font-family: ${theme('fonts.artist.fontFamily')};
  font-weight: ${theme('fonts.artist.fontWeight')};
  width: 100%;
  font-size: 5.5vh;
  text-align: center;
  margin-bottom: ${theme('dims.marginBottom')};
  letter-spacing: 7.8px;
  width: 850px;
`;
