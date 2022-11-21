class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
    <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}" />
      <div class="product-item__content">
       <h2>${this.product.title}</h2>
        <h3>£${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
    `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "Pillow",
      "https://i.pinimg.com/564x/fb/12/c2/fb12c2b0b2f5b199c34407f62dc58ea6.jpg",
      "soft pillow",
      19.99
    ),
    new Product(
      "Rug",
      "https://cdn.shopify.com/s/files/1/0087/2107/2187/products/ttk3032_eg_2400x.jpg?v=1587113624",
      "indoor rug",
      50.99
    ),
  ];
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
