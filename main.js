var transactions = [
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'CJ Cherryh',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XS Doodad', price: -0.50 },
      { name: 'XS Doodad', price: -0.50 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Basic Gadget', price: -2.00 },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Frederik Pohl',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Clarke Computing',
    items: [
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Neal Stephenson',
    items: [
      { name: 'kilobyte', price: 1024.00 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
    ]
  }
];


// --------------------------------------------------
// EXAMPLE QUESTION
// --------------------------------------------------
/*
  Calculate the total number of transactions.
*/
var totalTransactions = transactions.length;

console.log( 'The total number of transactions is:', totalTransactions );


// --------------------------------------------------
// QUESTION 01
// --------------------------------------------------
/*
  Calculate the total number of 'sales'.

  HINT(S):
  - Not all transactions are 'sales'.
*/
var numSales = transactions.filter(transaction => transaction.type == 'sale').length;

console.log( 'The total number of sales is:', numSales );


// --------------------------------------------------
// QUESTION 02
// --------------------------------------------------
/*
  Calculate the total number of 'purchases'.
*/
var numPurchases = transactions.filter(transaction => transaction.type == 'purchase').length;

console.log( 'The total number of purchases is:', numPurchases );


// --------------------------------------------------
// QUESTION 03
// --------------------------------------------------
/*
  Calculate the total number of 'cash' 'sales'.
*/

function cashSales(transaction) {
  if (transaction.type == 'purchase' && transaction.paymentMethod == 'cash') {
    return true
  }
}

var numCashSales = transactions.filter(cashSales).length;

console.log( 'The total number of cash sales is:', numCashSales );


// --------------------------------------------------
// QUESTION 04
// --------------------------------------------------
/*
  Calculate the total number of 'credit' 'purchases'.
*/

function creditPurchases(transaction) {
  if (transaction.type == 'purchase' && transaction.paymentMethod == 'credit') {
    return true
  }
}

var numCreditPurchases = transactions.filter(creditPurchases).length;

console.log( 'The total number of credit purchases is:', numCreditPurchases );


// --------------------------------------------------
// QUESTION 05
// --------------------------------------------------
/*
  Create an array that includes all of vendors which appear in the transactions data set.
  eg. `[ 'vendor one', 'vendor two', ... ]

  HINT(S):
  - Not all transactions have a 'vendor'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - This array is allowed to contain duplicate values.
*/
var allVendors = [];
function uniqueVendors(transaction) {
  if (transaction.vendor) {
    if (allVendors.includes(transaction.vendor) == false) {
      allVendors.push(transaction.vendor);
      return true
    }
  }
}
transactions.filter(uniqueVendors);

console.log(
  'The vendors are:', allVendors );


// --------------------------------------------------
// QUESTION 06
// --------------------------------------------------
/*
  Create an array that includes all of the *unique* customers which appear in the transactions data set.
  eg. `[ 'customer one', 'customer two', ... ]

  HINT(S):
  - Not all transactions have a 'customer'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - Make sure that the resulting array *does not* include any duplicates.
*/
var uniqueCustomers = [];
function uniqCustomers(transaction) {
  if (transaction.customer) {
    if (uniqueCustomers.includes(transaction.customer) == false) {
      uniqueCustomers.push(transaction.customer);
      return true
    }
  }
}
transactions.filter(uniqCustomers)
console.log( 'The unique customers are:', uniqueCustomers );


// --------------------------------------------------
// QUESTION 07
// --------------------------------------------------
/*
  Create an array of information about the 'sale' transactions which include 5 or more items.

  The array should resemble the following:
  [ { name: 'Customer Name', numItems: 5 }, ... ]

  HINT(S):
  - There may be more than 1 'sale' that includes 5 or more items.
  - Individual transactions do not have either `name` or `numItems` properties, we'll have to add them to the output.
*/
function spenders(transaction) {
  if (transaction.type == 'sale' && transaction.items.length >= 5) {
    obj = {
      name: transaction.customer,
      numItems: transaction.items.length
    }
    bigSpenders.push(obj);
    return true
  }
}
var bigSpenders = [];
transactions.filter(spenders);
console.log( 'The "big spenders" are:', bigSpenders );


// --------------------------------------------------
// QUESTION 08
// --------------------------------------------------
/*
  Calculate the sum of the *first* 'sale' transaction.

  HINT(S):
  - Transactions don't have 'prices', but their 'items' do!
*/
function sales(transaction) {
  if (transaction.type == 'sale') {
    return true
  }
}
allSales = transactions.filter(sales)[0].items;
var sumSales = 0;
for (var i = 0; i < allSales.length; i++) {
  sumSales += allSales[i].price
}

console.log( 'The sum of first sale is:', sumSales );


// --------------------------------------------------
// QUESTION 09
// --------------------------------------------------
/*
  Calculate the sum of *all* 'purchase' transactions.

  HINT(S):
  - Your solution to 'QUESTION 08' is a good starting point!
  - Make sure to include 'price' information from *all* purchases.
*/
function purchases(transaction) {
  if (transaction.type == 'purchase') {
    return true
  }
}

var sumPurchases = 0;
allPurchases = transactions.filter(purchases);

for (var i = 0; i < allPurchases.length; i++) {
  for (var j = 0; j < allPurchases[i].items.length; j++) {
    sumPurchases += allPurchases[i].items[j].price;
  }
}

console.log( 'The sum of all purchases is:', sumPurchases.toFixed(2) );


// --------------------------------------------------
// QUESTION 10
// --------------------------------------------------
/*
  Calculate the company's net profit.

  This number will be positive if the sum of the sales is greater than the amount spent on purchases.

  Otherwise, this number will be negative.

  HINT(S):
  - Unlike 'QUESTION 08' and 'QUESTION 09', here we're interested in both 'sale' and 'purchase' transactions.
*/
var netProfit = 0;

for (var i = 0; i < transactions.length; i++) {
  for (var j = 0; j < transactions[i].items.length; j++) {
    netProfit += transactions[i].items[j].price;
  }
}

console.log( 'The net profit is:', netProfit.toFixed(2) );


// --------------------------------------------------
// QUESTION 11
// --------------------------------------------------
/*
  Calculate the most items sold as part of single transaction.

  HINTS:
  - The result of this calculation should be a number (not an array, object, or other data type).
*/

var itemTransactions = [];

for (var i = 0; i < transactions.length; i++) {
  itemTransactions.push(transactions[i].items.length);
}

var mostItems = Math.max.apply(Math, itemTransactions);

console.log( 'The most items sold in a single transaction is:', mostItems );


// --------------------------------------------------
// QUESTION 12
// --------------------------------------------------
/*
  Calculate the sum of the 'purchase' with the fewest items.
*/
var purchaseLengths = [];
for (var i = 0; i < allPurchases.length; i++) {
  purchaseLengths.push(allPurchases[i].items.length);
}
var smallestPurchaseIndex = purchaseLengths.indexOf(Math.min.apply(Math, purchaseLengths))
var sumOfSmallestPurchase = 0;
for (var i = 0; i < allPurchases[smallestPurchaseIndex].items.length; i++) {
  sumOfSmallestPurchase += allPurchases[smallestPurchaseIndex].items[i].price;
}

console.log( 'The sum of the smallest purchase is:', sumOfSmallestPurchase.toFixed(2) );
