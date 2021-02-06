import styled from 'styled-components';
import { theme } from 'styled-tools';

export const FullscreenButtonWrapper = styled.button`
    padding: 0;
    color: ${theme('colors.text.title')};
    letter-spacing: 1.5px;
    background-color: transparent;
    border: 0;
    font-family: ${theme('fonts.title.fontFamily')};
`;