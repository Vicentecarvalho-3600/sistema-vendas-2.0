import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { createOrderController } from "../instances/order/createOrder";

const orderRoutes = Router();

orderRoutes.post("/", isAuthenticated, (req, res, next) => {
  createOrderController.handle(req, res, next);
});

orderRoutes.get("/", isAuthenticated, (req, res, next) => {
  res.send("nao implemntado");
});

export { orderRoutes };
