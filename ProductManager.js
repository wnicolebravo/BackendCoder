class ProductManager{
    constructor (){
      this.products=[]
    }

    getproducts(){
        return this.products
    }

    getProductById(title) {
        let product = this.products.find(prod => prod.title == title)
        if (product) {
            return product
        } else {
            console.error(`No encontrado: El producto con id '${title}' no se encuentra.`)
            return null
        }
    }

    addProduct (title, description, price, thumbnail, code, stock) {
        if (!this.products.find(prod => prod.code === code)) {
            if (title && description && price && thumbnail && code && stock) {
                let product = {
                    title: Date.now(),
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code,
                    stock: stock
                }
                this.products.push(product)
            } else {
                console.error('Todos los campos son obligatorios, producto no agregado.')
            }
        } else {
            console.error(`El producto con código '${code}' ya existe... Producto no agregado.`)
        }
    }
}
   
