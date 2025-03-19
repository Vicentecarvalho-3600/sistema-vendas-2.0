import { AppError } from "../../errors/AppError";
import prismaClient from "../../prisma";

type RemoveOrderParams = {
  orderId: string;
};

class RemoveOrderService {
  async execute({ orderId }: RemoveOrderParams) {
    const orderExist = await prismaClient.order.findFirst({
      where: {
        id: orderId,
      },
    });

    if (!orderExist) {
      throw new AppError("pedido não encontrado");
    }

    const order = await prismaClient.order.delete({
      where: {
        id: orderId,
      },
    });
    return order;
  }
}

export { RemoveOrderService };
