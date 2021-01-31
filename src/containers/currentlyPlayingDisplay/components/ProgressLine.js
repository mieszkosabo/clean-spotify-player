import { Line } from "rc-progress";
import styled from 'styled-components';
import {theme} from 'styled-tools'

export const ProgressLine = styled(Line)`
width: 70%;
height: calc(min(2vh, 2vw) / 2);
margin-bottom: ${theme('dims.marginBottom')};
`;