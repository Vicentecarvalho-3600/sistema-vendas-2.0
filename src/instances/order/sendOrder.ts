import { SendOrderService } from "../../services/order/SendOrderService";
import { SendOrderController } from "../../controllers/order/SendOrderController";

const sendOrderService = new SendOrderService();
const sendOrderController = new SendOrderController(sendOrderService);

export { sendOrderController };
