import { CreateOrderService } from "../../services/order/CreateOrderService";
import { CreateOrderController } from "../../controllers/order/CreateOrderController";

const createOrderService = new CreateOrderService();
const createOrderController = new CreateOrderController(createOrderService);

export { createOrderController };
