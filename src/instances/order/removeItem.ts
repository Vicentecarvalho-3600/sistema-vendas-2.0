import { RemoveItemService } from "../../services/order/RemoveItemService";
import { RemoveItemController } from "../../controllers/order/RemoveItemController";

const removeItemService = new RemoveItemService();
const removeItemController = new RemoveItemController(removeItemService);

export { removeItemController };
