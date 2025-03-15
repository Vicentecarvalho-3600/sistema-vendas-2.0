import { NextFunction, Response, Request } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";
import { AppError } from "../../errors/AppError";

class CreateProductController {
  constructor(private createProductService: CreateProductService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, price, categoryId, description } = req.body;

      if (!req.file) {
        throw new AppError("erro ao enviar a foto");
      }

      const { filename: banner } = req.file;
      const product = await this.createProductService.execute({
        name,
        price,
        banner,
        categoryId,
        description,
      });
      return res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }
}

export { CreateProductController };
