import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { tokenSelector, noDataSelector, loadingSelector } from "./selectors";
import { CurrentlyPlayingDisplay } from "../currentlyPlayingDisplay";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../theme/globalStyles";
import { theme } from "../../theme";
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken } from "./actions";
import { StyledLoader } from "./components/StyledLoader";
import { getTokens } from "./utils";
import { isNil } from "ramda";
import { FullWrapper } from "./components/FullWrapper";
import { LoginLink } from "./components/StyledLink";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export const App = () => {
  const token = useSelector(tokenSelector);
  const no_data = useSelector(noDataSelector);
  const loading = useSelector(loadingSelector);
  const dispatch = useDispatch();
  const handle = useFullScreenHandle();

  useEffect(() => {
    const { accessToken, refreshToken } = getTokens();
    if (!isNil(accessToken)) {
      dispatch(setAccessToken(accessToken));
    }
    if (!isNil(refreshToken)) {
      dispatch(setRefreshToken(refreshToken));
    }
  }, [dispatch, handle, token]);

  return (
    <FullScreen handle={handle}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <header className="App-header">
            {!token && (
              <FullWrapper>
              <LoginLink href="http://localhost:4000/login"> Log in with Spotify </LoginLink>
              </FullWrapper>
            )}
            {token && no_data && !loading && (
              <LoginLink> Play something! </LoginLink>
            )}
            {token && loading && <StyledLoader />}
            {!handle.active && <button onClick={handle.enter}>Click to go fullscreen!</button>}
            {token && !no_data && !loading && <CurrentlyPlayingDisplay />}
          </header>
        </div>
      </ThemeProvider>
    </FullScreen>
  );
};

