import { AppError } from "../../errors/AppError";
import prismaClient from "../../prisma";

type FinishOrderParams = {
  orderId: string;
};

class FinishOrderService {
  async execute({ orderId }: FinishOrderParams) {
    const order = await prismaClient.order.update({
      where: {
        id: orderId,
      },
      data: {
        status: true,
      },
    });
    return order;
  }
}

export { FinishOrderService };
