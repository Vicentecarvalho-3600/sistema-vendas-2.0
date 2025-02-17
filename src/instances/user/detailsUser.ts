import { DetailsUserService } from "../../services/user/DetailsUserService";
import { DetailsUserController } from "../../controllers/user/DetailsUserController";

const detailUserService = new DetailsUserService();
const detailsUserController = new DetailsUserController(detailUserService);

export { detailsUserController };
