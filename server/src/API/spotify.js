import SpotifyWebApi from "spotify-web-api-node";
import { client_id, client_secret } from "../config/config.js";

const spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
});

spotifyApi
  .clientCredentialsGrant()
  .then((data) => {
    spotifyApi.setAccessToken(data.body["access_token"]);
  })
  .catch((err) => {
    throw err;
  });

export default spotifyApi;
