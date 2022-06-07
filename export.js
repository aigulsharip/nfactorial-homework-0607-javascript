
export const a = 5;

// export default a;

let items = new Array ("milk", "juice", "banana", "milk");

let countItemsInShop = () => items.length;

let hasThisProduct = (product) => items.includes(product);

//console.log(countItemsInShop());
//console.log(hasThisProduct("juice"));

export  { countItemsInShop, hasThisProduct } ;
