import { AppError } from "../../errors/AppError";
import prismaClient from "../../prisma";

type AddItemParams = {
  amount: number;
  orderId: string;
  productId: string;
};

class AddItemService {
  async execute({ amount, productId, orderId }: AddItemParams) {
    const addItem = await prismaClient.item.create({
      data: {
        amount: amount,
        order_id: orderId,
        product_id: productId,
      },
    });
    return addItem;
  }
}

export { AddItemService };
