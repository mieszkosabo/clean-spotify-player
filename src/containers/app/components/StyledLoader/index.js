import Loader from "react-loader-spinner";
import styled from "styled-components";
import React from "react";

const LOADER_SIZE = 300;

const LoaderWrapper = ({ className }) => (
  <div className={className}>
    <Loader
      type="Audio"
      color="#528E4D"
      height={LOADER_SIZE}
      width={LOADER_SIZE}
    />
    <p>LOADING</p>
  </div>
);

export const StyledLoader = styled(LoaderWrapper)`
  width: 100%;
  position: fixed;
  top: calc(50vh - ${LOADER_SIZE / 2}px);
  svg {
    width: 100%;
  }
  p {
    margin-top: 15px;
    text-align: center;
    font-size: 4vh;
  }
`;
