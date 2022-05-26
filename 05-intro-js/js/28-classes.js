// Classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  formatProduct() {
    return `Product ${this.name}, price: ${this.price}`;
  }
}

const product = new Product('Tv', 500);

console.log(product);
console.log(product.formatProduct());
