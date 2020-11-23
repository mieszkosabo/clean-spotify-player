import styled from 'styled-components';
import {prop, theme} from 'styled-tools'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 1920px;
    align-items: center;
    height: 1080px;
    background-color: ${prop('color', theme("colors.background"))};
`;
