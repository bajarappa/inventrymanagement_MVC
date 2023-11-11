export default class ProductModel {
    constructor(id, name, desc, price, imageUrl) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imageUrl = imageUrl;
    }
    static get() {
        return products;
    }
    static add(name, price, desc, imageUrl) {
        let newProduct = new ProductModel(
            products.length + 1,
            name,
            price,
            desc,
            imageUrl
        );
        // const id = products.length + 1;
        // newProduct.id = id;
        products.push(newProduct);
    }
}
var products = [
    new ProductModel(
        1,
        "Product 1",
        "Description for Product 1",
        19.99,
        "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
    ),
    new ProductModel(
        2,
        "Product 2",
        "Description for Product 2",
        29.99,
        "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
    ),
    new ProductModel(
        3,
        "Product 3",
        "Description for Product 3",
        39.99,
        "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"
    ),
];
