import { NextFunction, Response, Request } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
  constructor(private listCategoryService: ListCategoryService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const listCategory = await this.listCategoryService.execute();
      return res.json(listCategory);
    } catch (error) {
      next(error);
    }
  }
}

export { ListCategoryController };
