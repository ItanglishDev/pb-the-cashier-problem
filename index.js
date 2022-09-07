class Shop {

  constructor(name) {

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

  constructor(product) {

    this.product = product
  }

  addToStore(item) {

    this.product.push(item)
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

// NEW SHOP CREATED
const edeka = new Shop

// PRODUCT MANAGER CREATED
const managingNewProducts = new ProductManager(edeka.products)

// PRODUCT CREATED
const banana = new Product('Banana', 1, 345)
const pineapple = new Product('Pineapple', 1, 50, 245)
const apple = new Product('Apple', 0.75, 645)
const orange = new Product('Orange', 1.2, 347)
const strawberry = new Product('Strawberry', 2.5, 375)

// ADDING PRODUCTS TO SHOP
managingNewProducts.addToStore(banana)
managingNewProducts.addToStore(pineapple)
managingNewProducts.addToStore(apple)
managingNewProducts.addToStore(orange)
managingNewProducts.addToStore(strawberry)


const cashier = new TillManager(edeka.till)
console.log(edeka.products);
