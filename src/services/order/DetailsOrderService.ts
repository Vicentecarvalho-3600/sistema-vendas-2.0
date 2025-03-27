import { AppError } from "../../errors/AppError";
import prismaClient from "../../prisma";

type DeitailsOrderParams = {
  orderId: string;
};

class DetailsOrderService {
  async execute({ orderId }: DeitailsOrderParams) {
    const details = await prismaClient.item.findMany({
      where: {
        order_id: orderId,
      },
      select: {
        id: true,
        amount: true,
        order: {
          select: {
            table: true,
            name: true,
          },
        },
        product: {
          select: {
            name: true,
          },
        },
      },
    });
    return details;
  }
}

export { DetailsOrderService };
