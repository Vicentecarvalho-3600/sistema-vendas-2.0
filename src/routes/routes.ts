import { Router, Request, Response } from "express";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/users", userRoutes);

export { routes };
