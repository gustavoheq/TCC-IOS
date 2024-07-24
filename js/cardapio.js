function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "../img/menu_white_36dp.svg"
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "../img/close_white_36dp.svg"
  }
}

document.addEventListener('DOMContentLoaded', function () {

  const addToCartButtons = document.querySelectorAll('.add-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addProductToCart);
  });

  initializeCartProductListeners();
});

function initializeCartProductListeners() {

  const removeCartProductButtons = document.querySelectorAll('.remove-product-button');
  removeCartProductButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const quantityInputs = document.querySelectorAll('.product-qtd-input');
  quantityInputs.forEach(input => {
    input.addEventListener('change', checkIfInputIsNull);
  });

  const purchaseButton = document.querySelector('.purchase-button');
  purchaseButton.addEventListener('click', makePurchase);
}

function addProductToCart(event) {
  const button = event.target;
  const productCard = button.closest('.card-product');
  const productId = productCard.getAttribute('data-product-id');
  const productImage = productCard.querySelector('.product-image').src;
  const productName = productCard.querySelector('.product-title').innerText;
  const productPrice = productCard.querySelector('.price').innerText;

  const cartItems = document.querySelector('.cart-table tbody');
  const existingCartItem = cartItems.querySelector(`.cart-product[data-product-id="${productId}"]`);

  if (existingCartItem) {
    const quantityInput = existingCartItem.querySelector('.product-qtd-input');
    quantityInput.value = parseInt(quantityInput.value) + 1;
  } else {
    const cartRow = document.createElement('tr');
    cartRow.classList.add('cart-product');
    cartRow.setAttribute('data-product-id', productId);

    cartRow.innerHTML = `
      <td class="product-identification">
        <img src="${productImage}" alt="${productName}" class="cart-product-image">
        <strong class="cart-product-title">${productName}</strong>
      </td>
      <td>
        <span class="cart-product-price">${productPrice}</span>
      </td>
      <td>
        <input type="number" value="1" min="1" class="product-qtd-input">
        <button type="button" class="remove-product-button">Remover</button>
      </td>
      <td class="cart-product-total">${productPrice}</td>
      <td>
        <button type="button" class="remove-product-button">Remover</button>
      </td>
    `;

    cartItems.appendChild(cartRow);
    cartRow.querySelector('.remove-product-button').addEventListener('click', removeProduct);
    cartRow.querySelector('.product-qtd-input').addEventListener('change', checkIfInputIsNull);
  }

  updateTotal();

  initializeCartProductListeners();
}

function removeProduct(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.cart-product').remove();
  updateTotal();
}

function checkIfInputIsNull(event) {
  const input = event.target;
  if (input.value <= 0) {
    input.closest('.cart-product').remove();
  }
  updateTotal();
}

function makePurchase() {
  const cartTotal = document.querySelector('.cart-total-container span').innerText;
  if (cartTotal === 'R$0,00') {
    alert('Seu carrinho está vazio!');
  } else {
    alert(`Obrigado pela sua compra!\nValor do pedido: ${cartTotal}\nVolte sempre :)`);
    document.querySelector('.cart-table tbody').innerHTML = '';
    updateTotal();
  }
}

function updateTotal() {
  let totalAmount = 0;
  const cartProducts = document.querySelectorAll('.cart-product');

  cartProducts.forEach(product => {
    const priceElement = product.querySelector('.cart-product-price');
    const quantityElement = product.querySelector('.product-qtd-input');
    const totalElement = product.querySelector('.cart-product-total');

    const price = parseFloat(priceElement.innerText.replace('R$', '').replace(',', '.'));
    const quantity = parseInt(quantityElement.value);

    const total = price * quantity;
    totalElement.innerText = `R$${total.toFixed(2).replace('.', ',')}`;

    totalAmount += total;
  });

  const totalFormatted = totalAmount.toFixed(2).replace('.', ',');
  document.querySelector('.cart-total-container span').innerText = `R$${totalFormatted}`;
}

function updateTotal() {
  let totalAmount = 0;
  const cartProducts = document.querySelectorAll('.cart-product');

  cartProducts.forEach(product => {
    const priceElement = product.querySelector('.cart-product-price');
    const quantityElement = product.querySelector('.product-qtd-input');
    const totalElement = product.querySelector('.cart-product-total');

    const priceText = priceElement.innerText.trim();
    const price = parseFloat(priceText.replace('R$', '').replace(',', '.'));

    const quantity = parseInt(quantityElement.value);

    const total = price * quantity;

    totalElement.innerText = `R$${total.toFixed(2).replace('.', ',')}`;

    totalAmount += total;
  });

  const totalFormatted = `R$${totalAmount.toFixed(2).replace('.', ',')}`;
  document.querySelector('.cart-total-container span').innerText = totalFormatted;
}
