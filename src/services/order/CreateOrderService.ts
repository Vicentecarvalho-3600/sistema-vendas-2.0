import { AppError } from "../../errors/AppError";
import prismaClient from "../../prisma";

type CreateOrderParams = {
  table: number;
  name: string;
};

class CreateOrderService {
  async execute({ table, name }: CreateOrderParams) {
    const category = await prismaClient.order.create({
      data: {
        table: table,
        name: name,
      },
    });
    return category;
  }
}

export { CreateOrderService };
