import React from "react";
import { useSelector } from "react-redux";
import { authEndpoint, clientId, redirectUri, scopes } from "../../api_config";
import { tokenSelector, noDataSelector } from "./selectors";
import { CurrentlyPlayingDisplay } from "../currentlyPlayingDisplay";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../theme/globalStyles";
import { theme } from "../../theme";

export const App = () => {
  const token = useSelector(tokenSelector);
  const no_data = useSelector(noDataSelector);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          {!token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          {token && no_data && <a> Play something on spotify first!</a>}
          {token && !no_data && <CurrentlyPlayingDisplay />}
        </header>
      </div>
    </ThemeProvider>
  );
};
