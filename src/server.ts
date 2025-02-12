import express, { Request, Response, NextFunction } from "express";
import { routes } from "./routes/routes";
import "dotenv/config";
const app = express();
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
