import { DetailsOrderService } from "../../services/order/DetailsOrderService";
import { DetailsOrderController } from "../../controllers/order/DetailsOrderController";

const detailsOrderService = new DetailsOrderService();
const detailsOrderController = new DetailsOrderController(detailsOrderService);

export { detailsOrderController };
