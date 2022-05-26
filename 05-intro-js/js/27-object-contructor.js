// Object constructor
function Product(name, price) {
  this.name = name;
  this.price = price;
}

const product1 = new Product('product 1', 500);

function formatProduct(product) {
  return `The product ${product.name} has a price ${product.price}`;
}

console.log(product1);
console.log(formatProduct(product1));

// Add prototype
Product.prototype.format = function () {
  return `Hello ${this.name}`;
};

console.log(product1.format());
