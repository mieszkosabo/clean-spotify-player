import styled from 'styled-components';
import { theme } from 'styled-tools';

export const LoginLink = styled.a`
  font-family: ${theme('fonts.title.fontFamily')};
  font-weight: ${theme('fonts.title.fontWeight')};
  font-size: 50px;
  color: palevioletred;
  text-align: center;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: palevioletred;
  }
`;