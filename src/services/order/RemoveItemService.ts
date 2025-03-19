import { AppError } from "../../errors/AppError";
import prismaClient from "../../prisma";

type RemoveItemParams = {
  itemId: string;
};

class RemoveItemService {
  async execute({ itemId }: RemoveItemParams) {
    const itemExists = await prismaClient.item.findFirst({
      where: {
        id: itemId,
      },
    });

    if (!itemExists) {
      throw new AppError("item não encontrado", 400);
    }

    const item = await prismaClient.item.delete({
      where: {
        id: itemId,
      },
    });

    return item;
  }
}

export { RemoveItemService };
