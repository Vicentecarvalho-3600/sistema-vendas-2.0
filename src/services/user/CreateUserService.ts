import { AppError } from "../../errors/AppError";
import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

type CreateUserParams = {
  name: string;
  email: string;
  password: string;
};

class CreateUserService {
  async execute({ name, email, password }: CreateUserParams) {
    if (!email) {
      throw new AppError("Email incorreto");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("Email já cadastrado");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
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

export { CreateUserService };
