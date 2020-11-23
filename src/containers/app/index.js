import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { clientId, redirectUri, scopes } from "../../api_config";
import { tokenSelector, noDataSelector, loadingSelector } from "./selectors";
import { CurrentlyPlayingDisplay } from "../currentlyPlayingDisplay";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../theme/globalStyles";
import { theme } from "../../theme";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setToken } from "./actions";
import { StyledLoader } from "./components/StyledLoader";
import { StyledSpotifyAuth } from "./components/StyledSpotifyAuth";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const App = () => {
  const token = useSelector(tokenSelector);
  const no_data = useSelector(noDataSelector);
  const loading = useSelector(loadingSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setToken(Cookies.get("spotifyAuthToken")));
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
        </header>
      </div>
    </ThemeProvider>
  );
};
