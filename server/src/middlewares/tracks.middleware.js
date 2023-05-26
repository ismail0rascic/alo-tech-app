import fs from "fs";
import { random } from "../utils/helpers.js";
import { validateGenreInput } from "../utils/validators.js";

export const readJson = (filePath) => {
  return (req, res, next) => {
    fs.readFile(filePath, (err, data) => {
      try {
        req.jsonData = JSON.parse(data);
        next();
      } catch (error) {
        res.send("Error parsing JSON data:", error);
      }
    });
  };
};

export const findRandomArtist = (req, res, next) => {
  const error = validateGenreInput(req.jsonData, req.query.q);
  const listOfArtistsByGenre = req.jsonData[req.query.q];

  if (error) {
    res.status(400).json(error);
  } else {
    req.artist = random(listOfArtistsByGenre);
    next();
  }
};
