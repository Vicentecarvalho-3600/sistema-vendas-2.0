import { NextFunction, Router } from "express";
import { createUserController } from "../instances/user/createUser";

const userRoutes = Router();

userRoutes.post("/", async (req, res, next: NextFunction) => {
  createUserController.handle(req, res, next);
});

export { userRoutes };
