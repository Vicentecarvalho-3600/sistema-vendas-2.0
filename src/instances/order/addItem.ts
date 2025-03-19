import { AddItemService } from "../../services/order/AddItemService";
import { AddItemController } from "../../controllers/order/AddItemController";

const addItemService = new AddItemService();
const addItemController = new AddItemController(addItemService);

export { addItemController };
