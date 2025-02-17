import { Router } from "express";
import { createUserController } from "../instances/user/createUser";
import { authUserController } from "../instances/user/authUser";
import { detailsUserController } from "../instances/user/detailsUser";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const userRoutes = Router();

userRoutes.post("/", (req, res, next) => {
  createUserController.handle(req, res, next);
});

userRoutes.post("/login", (req, res, next) => {
  authUserController.handle(req, res, next);
});

userRoutes.get("/me", isAuthenticated, (req, res, next) => {
  detailsUserController.handle(req, res, next);
});

export { userRoutes };
