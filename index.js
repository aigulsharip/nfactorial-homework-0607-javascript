

/* Dalida's shop*/
/* Task 1-2*/

let owner = "Dalida";
const SHOP_ADDRESS = "Satbayev 22";

let numberOfStaff = 3;
let isGloceryShop = true;

let fruit; //undefined
let fruitNull = null;

// /* Task 3*/
let product = {
    name: "juice",
    price: 350
};

console.log(product.name);

product.flavor = "orange";

product["quantity"] = 12;

console.log(product.flavor);

delete product.flavor;

product.sell = function() {
    console.log("you are selling the product");
}

product.sell()


// /* Task 4*/
let products = ["milk", "bread", "juice"];
let items = new Array ("milk", "juice", "banana", "milk");
let productsLen = products.length;
items.push("cola");
items.pop();
items.unshift("tomota");


let milkOnly = items.filter((item) => item == "milk")
console.log(milkOnly)

let oldProducts = items.map((item) => `old ${item}`);
console.log(oldProducts)
for(let i = 0; i < items.length; i++){ 
    console.log(items[i]);
}

function buyGlocery(name, price, ...products) {
    console.log(`${name} bought ${products} with total price of ${price} tenge`);
}

buyGlocery("Aigul", 1200, products);

let upcomingItems = ["brocolli", "salad"]

items = items.concat(upcomingItems);

let spreadText = ["Aigul", "Sharip"]

let greetings = ["Good day", ...spreadText, "Have a nice day"];


let slicedItems = items.slice(0,2);
console.log(slicedItems);

// /* Task 5*/
console.log("43" == 43); // true

console.log("43" === 43); // false

console.log (21 > 2)  // true

let wantToBuy = "juice";
// let purchasedItem = wantToBuy ?? "milk";

let textToConvertToLogical;

if (textToConvertToLogical) {
    console.log("printing true")
} else {
    console.log("printing false")
}

//print true if true, any text, any number, brackets, any object
// print false if false, 0, -0, "", null, undefined


//switch
let nameOfProduct = "juice";

switch(nameOfProduct) {
    case "juice":
        console.log("This is juice");
        break;
    case "apple":
        console.log("This is apple");
        break;
}

// /* Task 6*/

for(let i = 0; i < items.length; i++){ 
    console.log(items[i]);
}


let i = 0;
do {
  console.log(items[i]);
  i += 1;
 
} while (i < items.length);

while (i < items.length) {
    console.log ("Item " + i + " is " + items[i]);
    i++;
}


/* Task 7*/
function countItemsInShop () {
    return items.length;
}

let numberOfItems = function () {
    return items.length;
};
numberOfItems();
let numberOfItems1 = () => items.length;

let hasThisProduct = (product) => items.includes(product);
hasThisProduct("juice");


function showDetails (product) {
    console.log(`${product.name} costs ${product.price}` )
}

function show(name, price) {
    console.log(`${name} costs ${price}tg`);
}
show("apple", 250);

function show2({ name, price }) {
    console.log(`${name} costs ${price}tg`);
  }

  
show2(product);  


// /* Task 8*/
// Completed import and export in separate js files and package.json

console.log("completed");




