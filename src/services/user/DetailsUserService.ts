import prismaClient from "../../prisma";
type UserIdParams = {
  user_id: string;
};

class DetailsUserService {
  async execute({ user_id }: UserIdParams) {
    const user = prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  }
}

export { DetailsUserService };
