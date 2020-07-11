import React from "react";
import { SpotifyAuth } from "react-spotify-auth";
import styled from "styled-components";

const SpotifyAuthWrapper = ({ className, redirectUri, clientId, scopes }) => (
  <div className={className}>
    <SpotifyAuth
      redirectUri={redirectUri}
      clientID={clientId}
      scopes={scopes}
      title="Log in with Spotify"
      noLogo
    />
  </div>
);

export const StyledSpotifyAuth = styled(SpotifyAuthWrapper)`
  width: 100%;
  position: fixed;
  top: calc(50vh - 3vh);
  button {
    width: 100%;
    color: palevioletred;
    background: transparent;
    border: none;
    font-size: 3vw;
  }
`;
