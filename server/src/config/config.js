import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;
export const client_id = process.env.CLIENT_ID;
export const client_secret = process.env.CLIENT_SECRET;

