import styled from "styled-components";
import { theme } from "styled-tools";

//TODO: come up with something smart
// const adjustFontSize = len => `calc(7vw - ${len}px)`;
// const adjustFontSize = len => `7vw`;

export const TitleWrapper = styled.div`
  margin-top: 50px;
  color: ${theme("colors.mainColor")};
  font-family: ${theme("fonts.bold.fontFamily")};
  font-weight: ${theme("fonts.bold.fontWeight")};
  width: 100%;
  font-size: calc(100% + 4vh);
  text-align: center;
`;
