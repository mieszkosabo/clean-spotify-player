import { Line } from "rc-progress";
import { COVER_SIZE } from "./cavas/consts";
import styled from 'styled-components';
import {theme} from 'styled-tools'

export const ProgressLine = styled(Line)`
width: ${COVER_SIZE - 180}px;
height: calc(min(2vh, 2vw) / 2);
margin-bottom: ${theme('dims.marginBottom')};
`;