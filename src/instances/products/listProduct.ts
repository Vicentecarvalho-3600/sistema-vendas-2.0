import { ListProductService } from "../../services/products/ListProductService";
import { ListProductController } from "../../controllers/products/ListProductController";

const listProductService = new ListProductService();
const listProductController = new ListProductController(listProductService);

export { listProductController };
