class Shop {

  constructor(name, products, till) {

    this.name = name
    this.products = products
    this.till = till
  }
}

class Product {

  constructor(productName, price, id) {

    this.productName = productName
    this.price = price
    this.id = id
  }
}

class ProductManager {

  constructor(products) {

    this.products = products
  }

  addToStore(...item) {

    this.products.push(...item)
  }


}

class Till extends Product {

  constructor() {

    super()
    this.order = order
    this.total = total
  }

  buyProduct() {


  }
}