import { NextFunction, Response, Request } from "express";
import { DetailsOrderService } from "../../services/order/DetailsOrderService";

class DetailsOrderController {
  constructor(private detailsOrderService: DetailsOrderService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const orderId = req.query.order_id as string;
      const detailsOrder = await this.detailsOrderService.execute({ orderId });
      return res.json(detailsOrder);
    } catch (error) {
      next(error);
    }
  }
}

export { DetailsOrderController };
