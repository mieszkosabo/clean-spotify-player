import styled from 'styled-components';
import { theme } from 'styled-tools';

export const FullscreenButtonWrapper = styled.button`
    position: absolute;
    top: 5px;
    left 5px;
    color: ${theme('colors.text.artist')};
    letter-spacing: 1.5px;
    background-color: transparent;
    border: 0;
    font-family: ${theme('fonts.title.fontFamily')};
    &:hover {
      color: ${theme('colors.text.title')};
      transition: 0.4s;
    }
`;