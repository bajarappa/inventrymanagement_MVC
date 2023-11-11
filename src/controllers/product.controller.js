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
        // Validate data
        const { name, desc, price, imageUrl } = req.body;
        let errors = [];
        if (!name || name.trim() == "") {
            errors.push("Name is required");
        }
        if (!price || parseFloat(price) < 1) {
            errors.push("Price must be a positive number");
        }
        try {
            const validUrl = new URL(imageUrl);
        } catch (err) {
            errors.push("Url is invalid");
        }
        if (errors.length > 0) {
            return res.render("new-product", { errorMessage: errors[0] });
        }
        const product = ProductModel.add(name, desc, price, imageUrl);
        let products = ProductModel.get();
        res.render("products", { products: products });
    }
}
