import path from "path";
import ProductModel from "../models/product.model.js";
export default class ProductController {
    getProducts(req, res) {
        // console.log(path.resolve());
        let products = ProductModel.get();
        console.log(products);
        // return res.sendFile(
        //     path.join(path.resolve(), "src", "views", "products.html")
        // );
        res.render("products", { products: products });
    }
}
