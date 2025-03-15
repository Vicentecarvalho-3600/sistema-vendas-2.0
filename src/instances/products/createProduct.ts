import { CreateProductService } from "../../services/products/CreateProductService";
import { CreateProductController } from "../../controllers/products/CreateProductController";

const createProductService = new CreateProductService();
const createProductController = new CreateProductController(
  createProductService
);

export { createProductController };
