import { NextFunction, Response, Request } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController {
  constructor(private createOrderService: CreateOrderService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { table, name } = req.body;
      const order = await this.createOrderService.execute({ table, name });
      return res.status(201).json(order);
    } catch (error) {
      next(error);
    }
  }
}

export { CreateOrderController };
