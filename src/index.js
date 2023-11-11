import express from "express";
import ProductController from "./src/controllers/product.controller.js";

const server = express();

// create an instance of ProductController
const productController = new ProductController();

// Get method
server.get("/", productController.getProducts);

// Serving the static files
server.use(express.static("src/views"));

// Listening the server
server.listen(3400, () => console.log("Server is listening on pert 3400"));
