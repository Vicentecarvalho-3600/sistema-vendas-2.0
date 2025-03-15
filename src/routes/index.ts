import { Router } from "express";
import { userRoutes } from "./user.routes";
import { categoryRoutes } from "./category.routes";
import { productRoutes } from "./product.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/category", categoryRoutes);
routes.use("/product", productRoutes);

export { routes };
