import ProductModel from "../models/product.model.js";
import UserModel from "../models/user.model.js";

export default class UserController {
    getRegister(req, res) {
        res.render("register");
    }
    getLogin(req, res) {
        res.render("login", { errorMessage: null });
    }
    postRegister(req, res) {
        const { name, email, password } = req.body;
        UserModel.add(name, email, password);
        res.render("login", { errorMessage: null });
        // res.status(201).send("User created succesfully");
    }
    postLogin(req, res) {
        const { email, password } = req.body;
        const user = UserModel.isValidUser(email, password);
        if (!user) {
            res.render("login", { errorMessage: "Inavalid credentials" });
        }
        let products = ProductModel.getAll();
        res.render("index", { products });
    }
}
