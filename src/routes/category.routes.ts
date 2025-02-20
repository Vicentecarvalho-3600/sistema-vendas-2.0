import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { createCategoryController } from "../instances/category/createCategory";
import { listCategoryController } from "../instances/category/listCategory";

const categoryRoutes = Router();

categoryRoutes.post("/", isAuthenticated, (req, res, next) => {
  createCategoryController.handle(req, res, next);
});

categoryRoutes.get("/", isAuthenticated, (req, res, next) => {
  listCategoryController.handle(req, res, next);
});

export { categoryRoutes };
