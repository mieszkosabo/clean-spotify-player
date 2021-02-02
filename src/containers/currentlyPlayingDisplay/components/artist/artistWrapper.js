import styled from "styled-components";
import { theme, ifProp } from "styled-tools";

export const ArtistWrapper = styled.div`
  color: ${theme('colors.text.artist')};
  font-family: ${theme('fonts.artist.fontFamily')};
  font-weight: ${theme('fonts.artist.fontWeight')};
  width: 100%;
  font-size: ${ifProp('vertical', '5.5vw', '5.5vh')};
  text-align: center;
  margin-bottom: ${theme('dims.marginBottom')};
  letter-spacing: 7.8px;
  width: 88.5%;
`;
