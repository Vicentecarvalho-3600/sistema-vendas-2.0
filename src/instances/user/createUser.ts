import { CreateUserController } from "../../controllers/user/CreateUserController";
import { CreateUserService } from "../../services/user/CreateUserService";

const createUserService = new CreateUserService();
const createUserController = new CreateUserController(createUserService);

export { createUserController };
