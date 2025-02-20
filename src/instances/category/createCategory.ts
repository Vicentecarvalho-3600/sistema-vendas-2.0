import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { CreateCategoryController } from "../../controllers/category/CreateCategoryController";

const createCategoryService = new CreateCategoryService();
const createCategoryController = new CreateCategoryController(
  createCategoryService
);

export { createCategoryController };
