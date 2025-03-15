import express from "express";
import cors from "cors";
import { routes } from "./routes";
import dotenv from "dotenv";
import { errorHandler } from "./utils/errorHandler";
import path from "node:path";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
