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
