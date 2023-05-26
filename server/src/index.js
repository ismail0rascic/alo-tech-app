import app from "./App.js";
import { port } from "./config/config.js";

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
