import styled from 'styled-components';
import {prop, theme, ifProp} from 'styled-tools'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    align-items: center;
    height: 100vh;
    background-color: ${prop('color', theme("colors.background"))};
    flex-direction: ${ifProp('vertical', 'column', 'row')};
`;
