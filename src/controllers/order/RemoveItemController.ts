import { NextFunction, Response, Request } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveItemController {
  constructor(private removeItemService: RemoveItemService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const itemId = req.query.item_id as string;
      const item = await this.removeItemService.execute({ itemId });
      return res.json(item);
    } catch (error) {
      next(error);
    }
  }
}

export { RemoveItemController };
