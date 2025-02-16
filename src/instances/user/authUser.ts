import { AuthUserService } from "../../services/user/AuthUserService";
import { AuthUserController } from "../../controllers/user/AuthUserController";

const authUserService = new AuthUserService();
const authUserController = new AuthUserController(authUserService);

export { authUserController };
