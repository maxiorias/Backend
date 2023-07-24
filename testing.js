class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    if (!this.isValidProduct(product)) {
      console.error('Datos de producto inválidos.');
      return;
    }

    if (this.products.some((p) => p.code === product.code)) {
      console.error(`El producto con código ${product.code} ya existe.`);
      return;
    }

    const newProduct = {
      ...product,
      id: this.products.length + 1,
    };

    this.products.push(newProduct);
    console.log(`Producto con id ${newProduct.id} ha sido agregado exitosamente.`);
  }
  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      console.error('Producto no encontrado.');
      return null;
    }
    return product;
  }

  isValidProduct(product) {
    return (
      product &&
      product.title &&
      product.description &&
      product.thumbnail &&
      product.code &&
      product.stock !== undefined
    );
  }
}

const productManager = new ProductManager();

productManager.addProduct({
  title: 'Remera Pax',
  description: 'Remera negra con estampa',
  thumbnail: 'imagen1.jpg',
  code: 'PAX1',
  stock: 10,
});

productManager.addProduct({
  title: 'Campera Pax',
  description: 'Campera de jean negra',
  thumbnail: 'imagen2.jpg',
  code: 'PAX2',
  stock: 15,
});

console.log(productManager.getProducts());
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(3));