import styled from "styled-components";
import { theme } from "styled-tools";


export const TitleWrapper = styled.div`
  margin-top: 10vh;
  color: ${theme('colors.text.title')};
  font-family: ${theme('fonts.title.fontFamily')};
  font-weight: ${theme('fonts.title.fontWeight')};
  font-size: 7vh;
  text-align: center;
  margin-bottom: ${theme('dims.marginBottom')};
  letter-spacing: 10px;
  width: 850px;
`;
