// const { clear, log } = require('console')

// const { log } = require('forever');
const { log } = require('forever');
const readline = require('readline-sync');

class Shop {

  constructor(name) {

    this.name = name
    this.products = []
    this.till = []
  }
}

class Product {

  constructor(productName, price) {

    this.productName = productName
    this.price = price
    // this.id = id
  }
}

class ProductManager {

  constructor(products) {

    this.products = products
  }

  addToStore(item) {

    this.products.push(item)
    // console.log('TOTAL = ', () => );
  }
}

class TillManager {

  constructor(till) {

    this.sum = 0
    this.till = till
  }

  buyProduct(...itemName) {

    this.till.push(...itemName)

  }

  removeProduct(itemName) {

    this.till.splice(this.till.indexOf(itemName), 1)
    return this.till

  }
  total() {
    const bill = this.sum = this.till.reduce((acc, el) => acc + el.price, 0)
    console.log(bill);
    return bill
  }

  paymentMethod(answer) {

    if (answer !== 'card') {
      console.log('That\'s perfect');
    } else { console.log('I am sorry we do not accept them'); }
  }

  payment(amount) {
    this.total()
    let dueChange = amount - this.sum
    console.log(`The change due is ${dueChange}€, \nplease follow the next steps to give the correct change:`);
    console.log(" ");
    const currency = [200, 100, 50, 20, 10, 5, 1, .5, .2, .1]

    // console.log('HERE', (dueChange / 50));
    // console.log('HERE', (dueChange % 50));
    currency.forEach(el => {
      if (dueChange / el > 1) {
        // console.log("FLOOr", Math.floor(dueChange / el));
        let value = Math.floor(dueChange / el)
        // console.log(value);
        dueChange -= Math.floor(dueChange / el) * el
        console.log(`${value} x ${el}€`);
        console.log(" ");
      }

    })
  }
}

// NEW SHOP CREATED
const edeka = new Shop('edeka')
// console.log('HERE', edeka);

// PRODUCT MANAGER CREATED
const managingNewProducts = new ProductManager(edeka.products)

// PRODUCT CREATED
const banana = new Product('banana', 1)
const pineapple = new Product('pineapple', 1.50)
const apple = new Product('apple', 0.75)
const orange = new Product('orange', 1.2)
const strawberry = new Product('strawberry', 2.5)

// ADDING PRODUCTS TO SHOP
managingNewProducts.addToStore(banana)
managingNewProducts.addToStore(pineapple)
managingNewProducts.addToStore(apple)
managingNewProducts.addToStore(orange)
managingNewProducts.addToStore(strawberry)

// TILL MANAGER CREATED
const cashier = new TillManager(edeka.till)
console.log(edeka.products);

const shelves = edeka.products.map(el => el.productName)
// console.log(shelves);

// ADD PRODUCT TO TILL
// 
// cashier.buyProduct(orange, apple, banana)
// cashier.total()
// console.log("TILL1 ===>", edeka.till);
// REMOVE PRODUCT FROM TILL
// cashier.removeProduct(pineapple)
// console.log(pineapple);
// console.log("TILL2 ===>", edeka.till);

// cashier.paymentMethod('card')
// console.log(edeka.products);
// console.log(cashier.total());
// cashier.payment(100)


// ----------------------ADDING NODE READLINE-------------------


// const { clear, log } = require('console')

// console.clear()
// console.log();
// console.log(edeka.products)

console.log('HI, Welcome to the store! \n\nHow can I help you today?');

function thatQuestion() {
  // console.clear()
  console.log(shelves)
  readline.question('\nType an item you would like to add to your shopping  ',
    (name) => {
      for (let el of this.products) {
        if (el.productName == name) {
          cashier.buyProduct(el.productName)
        }
      }
      // let usefulVar = edeka.products.filter(el => el.productName[name]);
      ;
    }
  )
  console.log(cashier.till);
  helpQuestion()
}

thatQuestion()

function helpQuestion() {
  let answerOne = readline.question('\nAnything else I can help you with? (y or n)')


  if (answerOne === 'y' || answerOne === 'Y') {
    console.clear()
    // console.log(shelves)
    thatQuestion()
  }
  else {

    cashier.total()
    // console.clear()
    // console.log("till", edeka.till);
    console.log("total", cashier.total());
    const cashOrCard = readline.question('Cash or card?')
    cashier.paymentMethod(cashOrCard)

    const money = readline.question('How much are you going to pay with?')
    cashier.payment(money)
    cashier.till.filter(el => el)
    console.log(cashier.till);
  }
  // readline.close()
}



// console.log('Thanks for shopping with us');
// readline.close()



// readline.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`);
//   readline.close();
// });