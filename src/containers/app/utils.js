
import { isEmpty } from 'ramda';
import { CONFIG } from '../../config';
const delimiter = '__________';

export const getTokens = () => {
  const url = window.location.href;
  const tokens = url.split(`${CONFIG.FRONTEND_URL}/`)[1];
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