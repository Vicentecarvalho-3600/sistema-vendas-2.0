import { AppError } from "../../errors/AppError";
import prismaClient from "../../prisma";

type CreateOrderParams = {
  table: number;
  name: string;
};

class CreateOrderService {
  async execute({ table, name }: CreateOrderParams) {
    const order = await prismaClient.order.create({
      data: {
        table: table,
        name: name,
      },
    });
    return order;
  }
}

export { CreateOrderService };
