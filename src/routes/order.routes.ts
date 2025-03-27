import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { createOrderController } from "../instances/order/createOrder";
import { removeOrderController } from "../instances/order/removeOrder";
import { addItemController } from "../instances/order/addItem";
import { removeItemController } from "../instances/order/removeItem";
import { sendOrderController } from "../instances/order/sendOrder";
import { listOrderController } from "../instances/order/listOrder";
import { detailsOrderController } from "../instances/order/detailsOrder";
import { finishOrderController } from "../instances/order/finishOrder";

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

orderRoutes.delete("/remove", isAuthenticated, (req, res, next) => {
  removeItemController.handle(req, res, next);
});

orderRoutes.put("/send", isAuthenticated, (req, res, next) => {
  sendOrderController.handle(req, res, next);
});

orderRoutes.get("/list", isAuthenticated, (req, res, next) => {
  listOrderController.handle(req, res, next);
});

orderRoutes.get("/details", isAuthenticated, (req, res, next) => {
  detailsOrderController.handle(req, res, next);
});

orderRoutes.put("/finish", isAuthenticated, (req, res, next) => {
  finishOrderController.handle(req, res, next);
});

export { orderRoutes };
