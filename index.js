// const { clear, log } = require('console')
// const { log } = require('forever');
const { log } = require('forever');
const { clear } = require('forever/lib/forever/cli');
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

  buyProduct(itemName) {

    this.till.push(itemName)

  }

  removeProduct(itemName) {

    this.till.splice(this.till.indexOf(itemName), 1)
    return this.till

  }
  total() {
    let bill = this.till.reduce((acc, el) => acc + el.price, 0)

    return bill
  }

  paymentMethod(answer) {

    if (answer !== 'card') {
      console.log('\nThat\'s perfect');
    } else { console.log('\nI am sorry we do not accept them'); }
  }

  payment(amount) {

    let dueChange = amount - this.total()

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
// console.log(edeka.products);

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

console.log("\x1b[5m", 'HI, Welcome to the store! \n\nHow can I help you today?');

setTimeout(() => clearInterval(interval), 4000)

function thatQuestion() {
  // console.clear()
  console.log(shelves)
  const name = readline.question('\nType an item you would like to add to your shopping ')

  edeka.products.forEach(el => { if (el.productName === name) { cashier.buyProduct(el) } })

  helpQuestion()
}

thatQuestion()

function helpQuestion() {
  console.clear()
  let answerOne = readline.question("\x1b[5m", '\nAnything else I can help you with? (y or n)')


  if (answerOne === 'y' || answerOne === 'Y') {
    console.clear()
    // console.log(shelves)
    thatQuestion()
  }
  else {
    console.clear();
    const cashOrCard = readline.question("\x1b[5m", 'Cash or card?    ')
    cashier.paymentMethod(cashOrCard)
    console.log("\x1b[5m", `\nThat will be ' ${cashier.total()}€`);
    // console.log("till", edeka.till);
    cashier.total()
    // console.clear()
    // console.log("\nTotal =====>", cashier.total());

    setTimeout(() => clearInterval(interval), 4000)
    const money = readline.question('\nHow much is given to you?  ')
    console.log('This is the amount given', money);
    cashier.payment(money)
    // cashier.till.filter(el => el)
    console.log("\x1b[5m", cashier.till);
    // Reset = "\x1b[0m"
    console.log("\x1b[5m", 'Thanks for shopping with us');
  }
  // readline.close()
}



// console.log('Thanks for shopping with us');
// readline.close()



// readline.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`);
//   readline.close();
// });