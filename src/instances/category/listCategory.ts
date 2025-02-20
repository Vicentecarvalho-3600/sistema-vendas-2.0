import { ListCategoryService } from "../../services/category/ListCategoryService";
import { ListCategoryController } from "../../controllers/category/ListCategoryController";

const listCategoryService = new ListCategoryService();
const listCategoryController = new ListCategoryController(listCategoryService);

export { listCategoryController };
