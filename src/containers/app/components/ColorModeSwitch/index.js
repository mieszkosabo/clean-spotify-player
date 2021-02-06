/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Switch from "react-switch";
import styled from 'styled-components';
import { theme } from 'styled-tools'

const TopBarText = styled.div`
    font-family: ${theme('fonts.title.fontFamily')};
    color: ${theme('colors.text.title')};
    margin-right: -1.5vh;
    letter-spacing: 1.5px;
`;

export const ColorModeSwitch = ({ checked, onChange }) => (
  <>
    <TopBarText>Vibrant Mode</TopBarText>
    <Switch onChange={onChange} checked={checked} checkedIcon={false} uncheckedIcon={false}/>
  </>
)