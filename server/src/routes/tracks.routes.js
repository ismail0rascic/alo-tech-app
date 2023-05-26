import express from "express";

import { filePath } from "../utils/paths.js";

import { getTracks } from "../controllers/tracks.controller.js";
import {
  findRandomArtist,
  readJson,
} from "../middlewares/tracks.middleware.js";

const router = express.Router();
router
  .route("/api/tracks")
  .get(readJson(filePath), findRandomArtist, getTracks);

export default router;
