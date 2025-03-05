import { AppError } from "../../errors/AppError";
import prismaClient from "../../prisma";

type CreateCategoryParams = {
  name: string;
};

class CreateCategoryService {
  async execute({ name }: CreateCategoryParams) {
    if (name === "") {
      throw new AppError("name invalido");
    }

    if (!name) {
      throw new AppError("precisa informar um nome");
    }

    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return category;
  }
}

export { CreateCategoryService };
