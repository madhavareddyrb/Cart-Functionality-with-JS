document.addEventListener("DOMContentLoaded", () => {
  // create products
  const products = [
    { id: 1, name: "Apples", price: 60.99},
    { id: 2, name: "Banana", price: 39.99},
    { id: 3, name: "Fruits", price: 99.99}
  ];

  const cart = []
  const productList =  document.getElementById("product-list");
  const cartItems =  document.getElementById("cart-items")
  const emptyCartMessage = document.getElementById("empty-cart")
  const cartTotalMessage = document.getElementById("cart-total")
  const totalPriceDisplay = document.getElementById("total-price")
  const checkOutBtn = document.getElementById("checkout-btn")

   products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span> ${product.name} - $${product.price} </span>
    <button data-id = "${product.id}">Add to Cart</button>
    `
    productList.appendChild(productDiv);
   });

    




}); //Dom