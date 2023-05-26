import express from "express";
import tracksRouter from "./routes/tracks.routes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Explore spotify tracks!!!");
  });

app.use(tracksRouter);

export default app;
