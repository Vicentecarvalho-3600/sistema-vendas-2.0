import { NextFunction, Response, Request } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;
      const category = await this.createCategoryService.execute({ name });
      return res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }
}

export { CreateCategoryController };
