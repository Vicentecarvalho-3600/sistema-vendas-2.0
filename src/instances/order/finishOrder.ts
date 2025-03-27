import { FinishOrderService } from "../../services/order/FinishOrderService";
import { FinishOrderController } from "../../controllers/order/FinishOrderController";

const finishOrderService = new FinishOrderService();
const finishOrderController = new FinishOrderController(finishOrderService);

export { finishOrderController };
