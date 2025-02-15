import { NextFunction, Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  constructor(private createUserService: CreateUserService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;
      const user = await this.createUserService.execute({
        name,
        email,
        password,
      });
      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
}

export { CreateUserController };
