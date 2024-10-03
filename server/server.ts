import dotenv from "dotenv";
import { app } from "./app";
dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
