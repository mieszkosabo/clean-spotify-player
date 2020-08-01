import { createGlobalStyle } from "styled-components";
import { theme } from "styled-tools";

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    color: ${theme("colors.mainColor")};
    margin: 0;
    font-family: ${theme("fonts.regular.fontFamily")};
    font-style: ${theme("fonts.fontStyle")};
    background: ${theme("colors.background")};
  }
`;
