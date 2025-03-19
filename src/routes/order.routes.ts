import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { createOrderController } from "../instances/order/createOrder";
import { removeOrderController } from "../instances/order/removeOrder";
import { addItemController } from "../instances/order/addItem";

const orderRoutes = Router();

orderRoutes.post("/", isAuthenticated, (req, res, next) => {
  createOrderController.handle(req, res, next);
});

orderRoutes.delete("/", isAuthenticated, (req, res, next) => {
  removeOrderController.handle(req, res, next);
});

orderRoutes.post("/add", isAuthenticated, (req, res, next) => {
  addItemController.handle(req, res, next);
});

export { orderRoutes };
