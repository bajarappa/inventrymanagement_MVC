import { body, validationResult } from "express-validator";
export default async function validationRequest(req, res, next) {
    // 1. setup rules for validation
    console.log(req.body);
    const rules = [
        body("name").notEmpty().withMessage("Name is required"),
        body("price")
            .isFloat({ gt: 0 })
            .withMessage("Price should be a positive value"),
        body("imageUrl").isURL().withMessage("Invalid URL"),
    ];
    // 2. Run those rules
    await Promise.all(rules.map((rule) => rule.run(req)));
    // 3. Check if there are any errors after running the rules
    let validationErrors = validationResult(req);
    console.log(validationErrors);
    // 4. if errors, return the error message
    if (!validationErrors.isEmpty()) {
        return res.render("new-product", {
            errorMessage: validationErrors.array()[0].msg,
        });
    }
    next();
}

// export default function validationRequest(req, res, next) {
//   //
//     const { name, desc, price, imageUrl } = req.body;
//     let errors = [];
//     if (!name || name.trim() == "") {
//         errors.push("Name is required");
//     }
//     if (!price || parseFloat(price) < 1) {
//         errors.push("Price must be a positive number");
//     }
//     try {
//         const validUrl = new URL(imageUrl);
//     } catch (err) {
//         errors.push("Url is invalid");
//     }
//     if (errors.length > 0) {
//         return res.render("new-product", { errorMessage: errors[0] });
//     }
//     next();
// }
