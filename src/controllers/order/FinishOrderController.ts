import { NextFunction, Response, Request } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";

class FinishOrderController {
  constructor(private finishOrderService: FinishOrderService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { orderId } = req.body;
      const order = await this.finishOrderService.execute({ orderId });
      return res.json(order);
    } catch (error) {
      next(error);
    }
  }
}

export { FinishOrderController };
