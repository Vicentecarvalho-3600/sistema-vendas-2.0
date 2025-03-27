import { ListOrderService } from "../../services/order/ListOrderService";
import { ListOrderController } from "../../controllers/order/ListOrderController";

const listOrderService = new ListOrderService();
const listOrderController = new ListOrderController(listOrderService);

export { listOrderController };
