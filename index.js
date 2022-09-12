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
      console.log('\n' + "\x1b[30m" + "\x1b[42m" + 'That\'s perfect');
    } else { console.log("\n" + "\x1b[30m" + "\x1b[42m" + '  I am so sorry but I think we have an issue with the machine, I guess it\'s only cash for today  ' + "\x1b[0m" + "\n"); }
  }

  payment(amount) {

    let dueChange = amount - this.total()
    console.log(" ");
    console.log(`               The change due is ${dueChange}€`);
    console.log(" \n               please follow the next steps to give the correct change: \n");
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
        console.log("\x1b[33m", "            ", `${value}x ${el}€`, "\x1b[5m");
        console.log("\x1b[0m", "\n");
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

console.log("====== PLEASE READ THE " + "\x1b[42m" + "  " + "\x1b[0m" + " PARTS WITH A FIRM VOICE TO THE CLIENT  ======\n                  \n===>           " + "\x1b[42m" + "\x1b[30m" + "  Hi, Welcome to the store! \n" + "\x1b[0m" + "\n                  \n           " + "\x1b[42m" + "\x1b[30m" + "      How can I help you today?  \n" + "\x1b[0m");

function thatQuestion() {
  // console.clear()
  console.log(shelves)
  const name = readline.question('\nType CORRECTLY the name of the item you would like to add to the client\'s shopping ')

  edeka.products.forEach(el => { if (el.productName === name) { cashier.buyProduct(el) } })

  helpQuestion()
}

thatQuestion()

function helpQuestion() {
  console.clear()
  let answerOne = readline.question("\n     " + "\x1b[42m" + "\x1b[30m" + "  Anything else I can help you with? " + "\x1b[0m" + "  (type y or n, depending on the response)  " + "\x1b[0m")


  if (answerOne === 'y' || answerOne === 'Y') {
    console.clear("\x1b[0m")
    // console.log(shelves)
    thatQuestion()
  }
  else {
    console.clear("\x1b[0m");
    const cashOrCard = readline.question("\x1b[42m" + "\x1b[30m" + "  Are we paying with cash or card?  " + "\x1b[0m" + "    " + "(write card or cash, please no capital letters and no spaces    ")
    cashier.paymentMethod(cashOrCard)
    // console.clear()
    console.log(cashier.till);
    console.log(`                 ` + "\x1b[42m" + "\x1b[30m" + `That will be  ${cashier.total()}€` + "\x1b[0m");
    // console.log("till", edeka.till);
    // cashier.total()

    const money = readline.question('\nHow much is given to you?  ')
    // console.log('This is the amount given', money);
    console.clear()
    cashier.payment(money)
    // cashier.till.filter(el => el)

    // Reset = "\x1b[0m"
    console.log("\n                  " + "\x1b[42m" + "\x1b[30m" + "  There you go. Thanks for shopping with us!  " + "\x1b[0m\n");
  }
  // readline.close()
}



// console.log('Thanks for shopping with us');
// readline.close()



// readline.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`);
//   readline.close();
// });