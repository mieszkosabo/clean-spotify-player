import styled from "styled-components";
import { theme } from "styled-tools";

export const TitleWrapper = styled.div`
  margin-top: 50px;
  color: ${theme("colors.mainColor")};
  font-family: ${theme("fonts.bold.fontFamily")};
  font-weight: ${theme("fonts.bold.fontWeight")};
  font-size: 7vw;
  text-align: center;
`;
