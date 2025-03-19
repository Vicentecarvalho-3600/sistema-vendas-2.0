import { RemoveOrderService } from "../../services/order/RemoveOrderService";
import { RemoveOrderController } from "../../controllers/order/RemoveOrderController";

const removeOrderService = new RemoveOrderService();
const removeOrderController = new RemoveOrderController(removeOrderService);

export { removeOrderController };
