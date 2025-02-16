import { AppError } from "../../errors/AppError";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";
import { SignOptions, Secret } from "jsonwebtoken";

type AuthRequestParams = {
  email: string;
  password: string;
};

class AuthUserService {
  async execute({ email, password }: AuthRequestParams) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new AppError("email/senha incorretos", 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("email/senha incorretos", 401);
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET as Secret,
      {
        subject: user.id,
        expiresIn: "30d",
      } as SignOptions
    );

    return { id: user.id, name: user.name, email: user.email, token: token };
  }
}

export { AuthUserService };
