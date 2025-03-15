import prismaClient from "../../prisma";

type ListProductParams = {
  category_id: string;
};

class ListProductService {
  async execute({ category_id }: ListProductParams) {
    const findByCategory = await prismaClient.product.findMany({
      where: {
        category_id: category_id,
      },
    });

    return findByCategory;
  }
}

export { ListProductService };
