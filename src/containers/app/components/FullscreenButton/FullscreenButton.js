import React from 'react';
import { FullscreenButtonWrapper } from './FullscreenButtonWrapper';

export const FullscreenButton = ({ onClick }) => (
  <FullscreenButtonWrapper onClick={onClick}>
    Click here for fullscreen
  </FullscreenButtonWrapper>
)