class ProductManager{
    constructor (title, description, price, thumbnail, code, stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code= code;
        this.stock = stock;
    }


}
const Products = []
Products.push (new Products("Cargo pant", "Pantalon estilo cargo","5000","Ingreso a añadir","300 u"));
Products.push (new Products("Bermuda Hawai", "Bermuda floreada","3500","Ingreso a añadir","90"));

console.log(Products);