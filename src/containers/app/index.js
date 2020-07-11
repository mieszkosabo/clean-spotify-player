import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { authEndpoint, clientId, redirectUri, scopes } from "../../api_config";
import { tokenSelector, noDataSelector } from "./selectors";
import { CurrentlyPlayingDisplay } from "../currentlyPlayingDisplay";

export const App = () => {
  const token = useSelector(tokenSelector);
  const no_data = useSelector(noDataSelector);
  return (
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
  );
};
