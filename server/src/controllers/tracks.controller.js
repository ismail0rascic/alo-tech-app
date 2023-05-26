import "babel-polyfill";
import  spotifyApi  from "../API/spotify.js";
import { formatTracks } from "../utils/helpers.js";

export const getTracks = async (req, res) => {
  try {
    const data = await spotifyApi.searchTracks(`artist:${req.artist}`, {
      limit: 50,
      type: "track",
    });
    res.status(200).json(formatTracks(data.body.tracks.items));
  } catch (error) {
    res.status(400).json("Failed to retrieve tracks");
  }
};
