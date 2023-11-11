import path from "path";
import ProductModel from "../models/product.model.js";
export default class ProductController {
    getProducts(req, res) {
        // console.log(path.resolve());
        let products = ProductModel.get();
        // console.log(products);
        res.render("products", { products: products });
        // return res.sendFile(
        //     path.join(path.resolve(), "src", "views", "products.html")
        // );
    }
    getAddForm(req, res) {
        res.render("new-product", { errorMessage: null });
    }
    addNewProduct(req, res) {
        const { name, desc, price, imageUrl } = req.body;

        const product = ProductModel.add(name, desc, price, imageUrl);
        let products = ProductModel.get();
        res.render("products", { products: products });
    }
    getProductView(req, res, next) {
        // 1. if product exists then return view
        const { id } = req.body;
        const productFound = ProductModel.getById(id);
        if (productFound) {
            res.render("update-product", { productFound, errorMessage: null });
        }
        // 2. else return the errors
        else {
            res.status(401).send("Product not found");
        }
    }
}
