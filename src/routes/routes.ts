import { Router, Request, Response } from "express";
import { AppError } from "../errors/AppError";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.json({ message: "online" });
});

export { routes };
