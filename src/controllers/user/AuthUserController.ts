import { Request, Response, NextFunction } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
  constructor(private authUserService: AuthUserService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const auth = await this.authUserService.execute({ email, password });
      return res.json(auth);
    } catch (error) {
      next(error);
    }
  }
}

export { AuthUserController };
