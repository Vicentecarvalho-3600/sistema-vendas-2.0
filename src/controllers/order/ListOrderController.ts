import { NextFunction, Response, Request } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";

class ListOrderController {
  constructor(private listOrderService: ListOrderService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await this.listOrderService.execute();
      return res.status(201).json(orders);
    } catch (error) {
      next(error);
    }
  }
}

export { ListOrderController };
