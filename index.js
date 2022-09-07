class Shop {

  constructor(name, products, till) {

    this.name = name
    this.products = []
    this.till = []
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

  addToStore(item) {

    this.products.push(item)
  }


}

class TillManager {

  constructor(itemName, quantity) {

    this.itemName = itemName
    this.quantity = quantity
  }

  buyProduct(itemName, quantity) {

    this.till.push(itemName, quantity)

  }

  removeProduct() {
  }


}

const edeka = new Shop
const managingNewProducts = new ProductManager(edeka.products)
const banana = new Product('Banana', 1, 345)
const cashier = new TillManager(edeka.till)
managingNewProducts.addToStore(banana)

console.log(edeka.products);
