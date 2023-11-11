// Importing external models
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";

// Importing core models
import path from "path";

// Importing internal models
import ProductController from "./src/controllers/product.controller.js";
// import validationMiddleware from "./src/middlewares/validation.middleware.js";
import validationRequest from "./src/middlewares/validation.middleware.js";

// Creating the server
const server = express();

// Parse form data
server.use(express.urlencoded({ extended: true }));

// setup view engine settings
server.set("view engine", "ejs");
// Informing the view enjine where our views reside in this it's in views and path to the folders
server.set("views", path.join(path.resolve(), "src", "views"));

// create an instance of ProductController
const productController = new ProductController();

// Using the middle for layouts
server.use(expressEjsLayouts);

// Calling the get method
server.get("/", productController.getProducts);
server.get("/new", productController.getAddForm);
server.post("/", validationRequest, productController.addNewProduct);

// Serving the static files
server.use(express.static("src/views"));

// Listening the port
server.listen(3400);
console.log("Server is listening on pert 3400");
