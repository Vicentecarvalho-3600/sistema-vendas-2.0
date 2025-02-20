import prismaClient from "../../prisma";

type CreateCategoryParams = {
  name: string;
};

class CreateCategoryService {
  async execute({ name }: CreateCategoryParams) {
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
