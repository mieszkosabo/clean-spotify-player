const DEVELOPEMENT = ({
  FRONTEND_URL: 'localhost:3000',
  BACKEND_URL: 'http://localhost:4000'
});

const PRODUCTION = ({
  FRONTEND_URL: 'https://clean-spotify-player.hostman.site',
  BACKEND_URL: 'https://still-lake-17848.herokuapp.com'
});

console.log(process.env.NODE_ENV);
export const CONFIG = process.env.NODE_ENV === 'development' ? DEVELOPEMENT : PRODUCTION;