import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { clientId, redirectUri, scopes } from "../../api_config";
import { tokenSelector, noDataSelector, loadingSelector, refreshTokenSelector } from "./selectors";
import { CurrentlyPlayingDisplay } from "../currentlyPlayingDisplay";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../theme/globalStyles";
import { theme } from "../../theme";
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken } from "./actions";
import { StyledLoader } from "./components/StyledLoader";
import { StyledSpotifyAuth } from "./components/StyledSpotifyAuth";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios';
import { getTokens } from "./utils";
import { isNil } from "rambda";

export const App = () => {
  const token = useSelector(tokenSelector);
  const refreshToken = useSelector(refreshTokenSelector);
  const no_data = useSelector(noDataSelector);
  const loading = useSelector(loadingSelector);
  const dispatch = useDispatch();
  const onclick = () => {
    axios.get('http://localhost:4000/refresh_token',
    {
      params: {
        refresh_token: refreshToken
      }
    })
    .then((data) => {
      const { access_token, refresh_token } = data.data;
      if (!isNil(access_token)) {
        dispatch(setAccessToken(access_token));
      }
      if (!isNil(refresh_token)) {
        dispatch(setRefreshToken(refresh_token));
      }
    })
    .catch(console.log)
  }
  useEffect(() => {
    const { accessToken, refreshToken } = getTokens();
    if (!isNil(accessToken)) {
      dispatch(setAccessToken(accessToken));
    }
    if (!isNil(refreshToken)) {
      dispatch(setRefreshToken(refreshToken));
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          {!token && (
            <Row>
              <Col>
                <StyledSpotifyAuth
                  redirectUri={redirectUri}
                  clientId={clientId}
                  scopes={scopes}
                />
              </Col>
            </Row>
          )}
          {token && no_data && !loading && (
            <a> Play something on spotify first!</a>
          )}
          {token && loading && <StyledLoader />}
          {token && !no_data && !loading && <CurrentlyPlayingDisplay />}
          {<a href="http://localhost:4000/login"> linkers </a>}
          {<button onClick={onclick}>dawaj refresha</button>}
        </header>
      </div>
    </ThemeProvider>
  );
};
