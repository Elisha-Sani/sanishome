// Get the elements from the DOM
var quantityInputs = document.getElementsByClassName('cart-quantity');
var priceElements = document.getElementsByClassName('cart-price');
var totalElement = document.querySelector('.total-price');
var cartContent = document.querySelector('.cart-content');

// Function to handle the remove button click
function removeItem(event) {
  var removeButton = event.target;
  var cartBox = removeButton.parentNode;
  cartBox.remove();

  updateTotal();
}

// Event listener to handle remove button clicks
var removeButtons = document.getElementsByClassName('cart-remove');
for (var i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener('click', removeItem);
}

// Function to update the total price
function updateTotal() {
  var total = 0;

  // Loop through each product in the cart
  for (var i = 0; i < quantityInputs.length; i++) {
    var quantity = parseInt(quantityInputs[i].value);
    var price = parseFloat(priceElements[i].textContent.replace('KES ', ''));
    var productTotal = quantity * price;

    total += productTotal;
  }

  totalElement.textContent = 'KES ' + total.toFixed(2);
}

// Event listener to update the total when quantity inputs change
for (var i = 0; i < quantityInputs.length; i++) {
  quantityInputs[i].addEventListener('change', updateTotal);
}

// Call the updateTotal function initially to calculate the total
updateTotal();

// Get selected products from local storage
var selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));



// Update cart with selected products
if (selectedProducts && selectedProducts.length > 0) {
  selectedProducts.forEach(productId => {
    
    // Perform logic to add selected products to the cart
    // You can use the productId to fetch product details from a database or an array of products
    // and dynamically generate HTML elements to display the product information in the cartContent element

    // Example code to add a product to the cart
    var cartBox = document.createElement('div');
    cartBox.classList.add('cart-box');

    // Add product details to the cart box
    // ...

    // Append the cart box to the cart content
    cartContent.appendChild(cartBox);
  });
}
