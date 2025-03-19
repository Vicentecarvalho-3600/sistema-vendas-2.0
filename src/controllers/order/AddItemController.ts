import { NextFunction, Response, Request } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController {
  constructor(private addItemService: AddItemService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { amount, productId, orderId } = req.body;
      const addItem = await this.addItemService.execute({
        amount,
        productId,
        orderId,
      });
      return res.status(201).json(addItem);
    } catch (error) {
      next(error);
    }
  }
}

export { AddItemController };
