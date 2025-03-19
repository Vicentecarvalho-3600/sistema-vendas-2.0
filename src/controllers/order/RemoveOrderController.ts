import { NextFunction, Response, Request } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

class RemoveOrderController {
  constructor(private removeOrderService: RemoveOrderService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const orderId = req.query.order_id as string;
      const order = await this.removeOrderService.execute({ orderId });
      return res.status(200).json(order);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

export { RemoveOrderController };
