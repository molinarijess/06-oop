const productList = {
  products: [
    {
      title: "Pillow",
      imageUrl:
        "https://i.pinimg.com/564x/fb/12/c2/fb12c2b0b2f5b199c34407f62dc58ea6.jpg",
      price: 19.99,
      description: "Soft pillow",
    },
    {
      title: "Rug",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0087/2107/2187/products/ttk3032_eg_2400x.jpg?v=1587113624",
      price: 50.99,
      description: "Indoor rug",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
    <div>
      <img src="${prod.imageUrl}" alt="${prod.title}" />
      <div class="product-item__content">
       <h2>${prod.title}</h2>
        <h3>£${prod.price}</h3>
        <p>${prod.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
    `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
