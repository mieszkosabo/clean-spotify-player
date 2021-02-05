import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { tokenSelector, noDataSelector, loadingSelector, notPlayingSelector } from "./selectors";
import { CurrentlyPlayingDisplay } from "../currentlyPlayingDisplay";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../theme/globalStyles";
import { theme } from "../../theme";
import { useDispatch } from "react-redux";
import { setAccessToken, setLoading, setRefreshToken } from "./actions";
import { StyledLoader } from "./components/StyledLoader";
import { enableNoSleep, getTokens } from "./utils";
import { isNil } from "ramda";
import { FullWrapper } from "./components/FullWrapper";
import { LoginLink } from "./components/StyledLink";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { FullscreenButton } from "./components/FullscreenButton/FullscreenButton";
import { CONFIG } from "../../config";
import { GithubLink } from "./components/GithubLink/GithubLink";

export const App = () => {
  const token = useSelector(tokenSelector);
  const no_data = useSelector(noDataSelector);
  const loading = useSelector(loadingSelector);
  const notPlaying = useSelector(notPlayingSelector);
  const dispatch = useDispatch();
  const handle = useFullScreenHandle();
  useEffect(() => {
    if (isNil(token)) {
      const { accessToken, refreshToken } = getTokens();
      if (!isNil(accessToken)) {
        dispatch(setAccessToken(accessToken));
      }
      if (!isNil(refreshToken)) {
        dispatch(setRefreshToken(refreshToken));
      }
  }
  }, [dispatch, token]);

  return (
    <FullScreen handle={handle}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <header className="App-header">
            {!token && !loading && (
              <FullWrapper>
                <LoginLink
                  href={`${CONFIG.BACKEND_URL}/login`}
                  onClick={() => {
                    dispatch(setLoading());
                  }}
                  > 
                  Log in with Spotify 
                </LoginLink>
              </FullWrapper>
            )}
            {token && notPlaying && !loading && (
              <FullWrapper>
                <LoginLink> Play something! </LoginLink>
              </FullWrapper>
            )}
            {(no_data && loading) && <StyledLoader />}
            {!handle.active && (
              <>
                <FullscreenButton onClick={() => {
                  handle.enter();
                  enableNoSleep();
                }} />
                <GithubLink onClick={() => window.open('https://github.com/mieszkosabo/clean-spotify-player')} />
              </>
            )}
            {token && !no_data && <CurrentlyPlayingDisplay />}
          </header>
        </div>
      </ThemeProvider>
    </FullScreen>
  );
};
