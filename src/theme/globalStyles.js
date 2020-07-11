import { createGlobalStyle } from "styled-components";
import { theme } from "styled-tools";

// todo grid/flexbox
export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    margin: 0;
    font-family: ${theme("fonts.regular.fontFamily")};
    font-style: ${theme("fonts.fontStyle")};
    background: ${theme("colors.background")};
  }
`;
