import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import { routes } from "./routes/routes";
import "dotenv/config";
import { AppError } from "./errors/AppError";
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction): any => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "internal server error",
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
