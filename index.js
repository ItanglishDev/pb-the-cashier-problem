class Shop {

  constructor(name, products) {

    this.name = name
    this.products = products
  }
}

class Product {

  constructor(productName, price, id) {

    this.productName = productName
    this.price = price
    this.id = id
  }
}

class ProductManager extends Product {

  constructor() {

    super()
  }

  addToStore(productName, price, id) {

    this.products.push({ productName, price, id })
  }

  removeFromStore(productName, price, id) {

    delete { productName, price, id }
  }
}

