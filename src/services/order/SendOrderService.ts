import { AppError } from "../../errors/AppError";
import prismaClient from "../../prisma";

type SendOrderParams = {
  orderId: string;
};

class SendOrderService {
  async execute({ orderId }: SendOrderParams) {
    const order = await prismaClient.order.update({
      where: {
        id: orderId,
      },
      data: {
        draft: false,
      },
    });
    return order;
  }
}

export { SendOrderService };
