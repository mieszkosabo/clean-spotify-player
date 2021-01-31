
import { isEmpty } from 'ramda';
const delimiter = '__________';

export const getTokens = () => {
  const url = window.location.href;
  const tokens = url.split('https://clean-spotify-player.hostman.site/')[1];
  if (isEmpty(tokens)) {
    return ({
      accessToken: null,
      refreshToken: null
    });
  }
  const [encodedAccessToken, encodedRefreshToken] = tokens.split(delimiter);
  return ({
    accessToken: decodeURIComponent(encodedAccessToken),
    refreshToken: decodeURIComponent(encodedRefreshToken)
  });
}