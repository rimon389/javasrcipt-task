
const products = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 2500, stock: 10 },
  { id: 2, name: "Classic Backpack", category: "Accessories", price: 1500, stock: 5 },
  { id: 3, name: "Cotton T-Shirt", category: "Clothing", price: 650, stock: 20 },
  { id: 4, name: "Smart Watch", category: "Electronics", price: 3200, stock: 0 },
  { id: 5, name: "Running Shoes", category: "Clothing", price: 2200, stock: 8 },
  { id: 6, name: "Classic Sunglasses", category: "Accessories", price: 850, stock: 0 }
];


// problem 1: Display all product names and prices
 function ProductAndPrice(products){
    for(let i=0;i<products.length;i++){
        let product=products[i].name;
        let pPrice=products[i].price;
        console.log(product,":",pPrice);
    }
 }
ProductAndPrice(products)

//problem 2:  Display each product's stock availability
function StockProduct(products){
    for(let stocks of products){
        if(stocks.stock>0){
            console.log(stocks.name,"-","Stock");
        }
        else{
            console.log(stocks.name,"-","not stock");
        }
    }
}
StockProduct(products);



// problem 3: Find all Electronics products
function findElectronics(products){
    let Electronics=[];
    for(let electronic of products){
        if(electronic.category==="Electronics"){
            Electronics.push(electronic)
        }
    }
    return Electronics;
}
console.log(findElectronics(products));



//problem 4 Calculate total inventory value

function totalInventory(products){
    let total=0;
    for(let prodact of products){
        let totals=(prodact.price*prodact.stock);
        total=total+totals;

    }
    return total;
}
console.log(totalInventory(products));

// problem 5: Find the most expensive product

function mostExpensive(products) {
  let expensive = products[0];

  for (let product of products) {
    if (product.price > expensive.price) {
      expensive = product;
    }
  }

  return expensive;
}

console.log("Most Expensive Product:", mostExpensive(products));


// problem 6: Calculate discounted prices

function Discount(products) {
  for (let product of products) {
    let discount;

    if (product.price >= 2000) {
      discount = product.price*15/100;
    } else if (product.price >= 1000) {
      discount = product.price*10/100;
    } else {
      discount = product.price*5/100;
    }

    let discountPrice = product.price - discount;
    console.log(product.name,"-","discounted final price:",discountPrice);
  }
}

Discount(products);

