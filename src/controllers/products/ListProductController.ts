import { NextFunction, Response, Request } from "express";
import { ListProductService } from "../../services/products/ListProductService";
import { AppError } from "../../errors/AppError";

class ListProductController {
  constructor(private listProductService: ListProductService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const category_id = String(req.query.category_id);
      const listByCategory = await this.listProductService.execute({
        category_id,
      });
      return res.status(200).json(listByCategory);
    } catch (error) {
      next(error);
    }
  }
}

export { ListProductController };
