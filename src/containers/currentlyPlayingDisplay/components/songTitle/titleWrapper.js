import styled from "styled-components";
import { theme } from "styled-tools";

//TODO: come up with something smart
// const adjustFontSize = len => `calc(7vw - ${len}px)`;
// const adjustFontSize = len => `7vw`;

export const TitleWrapper = styled.div`
  margin-top: min(10vh, 10vw);
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: min(7vh, 7vw);
  text-align: center;
  margin-bottom: 40px;
  letter-spacing: 10px;
  width: 850px;
`;
