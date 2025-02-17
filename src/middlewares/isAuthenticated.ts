import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";

type Payload = {
  sub: string;
};

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authToken = req.headers.authorization;

    if (!authToken) {
      throw new AppError("Failed to verify acess token", 401);
    }

    const [, token] = authToken.split(" ");

    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;
    req.user_id = sub;
    next();
  } catch (error) {
    throw new AppError("Invalid authentication token", 401);
  }
}
