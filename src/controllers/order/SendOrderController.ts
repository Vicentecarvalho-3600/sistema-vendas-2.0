import { NextFunction, Response, Request } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

class SendOrderController {
  constructor(private sendOrderService: SendOrderService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { orderId } = req.body;
      const order = await this.sendOrderService.execute({ orderId });
      return res.json(order);
    } catch (error) {
      next(error);
    }
  }
}

export { SendOrderController };
