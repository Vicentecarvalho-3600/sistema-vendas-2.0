import { NextFunction, Request, Response } from "express";
import { DetailsUserService } from "../../services/user/DetailsUserService";

class DetailsUserController {
  constructor(private detailUserService: DetailsUserService) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const user_id = req.user_id;
      const user = await this.detailUserService.execute({ user_id });

      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}

export { DetailsUserController };
