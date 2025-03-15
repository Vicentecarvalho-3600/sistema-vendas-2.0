import { Router } from "express";
import multer from "multer";
import uploadConfig from "../config/multer";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { createProductController } from "../instances/products/createProduct";

const productRoutes = Router();

const upload = multer(uploadConfig.upload("./tmp"));

productRoutes.post(
  "/",
  isAuthenticated,
  upload.single("file"),
  (req, res, next) => {
    createProductController.handle(req, res, next);
  }
);

productRoutes.get("/", isAuthenticated, (req, res, next) => {});

export { productRoutes };
