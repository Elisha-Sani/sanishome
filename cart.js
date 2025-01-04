// Get the elements from the DOM
const quantityInputs = document.getElementsByClassName('cart-quantity');
const priceElements = document.getElementsByClassName('cart-price');
const cartContent = document.querySelector('#cartContent');

const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Get selected products from local storage
document.addEventListener('DOMContentLoaded', () => {
    displayCart();
});

function displayCart() {
        cartContent.innerHTML = '';
        let totalPrice = 0;

        cart.forEach((product, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `    
                <img src="${product.image}" alt="${product.title}">
                <div class="cart-details">
                    <h3>${product.title} (${product.quantity})</h3>
                    <p>${product.price}</p>
                    <i class="fa-solid fa-trash cart-remove" data-index="${index}"></i>
                </div>
                
            `;
            cartContent.appendChild(cartItem);
            totalPrice += product.price * product.quantity;
        });
        // Accumulate The total price
        updateTotalPrice(totalPrice);
}

    // document.getElementById('cartContent').innerHTML = cartContent;

function updateTotalPrice(totalPrice) {
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = totalPrice === 0 ? 'Cart is Empty' : `Total: KES ${totalPrice.toFixed(2)}`;
}

// Handle the removal of items from the cart
cartContent.addEventListener('click', function(event){
    if (event.target.classList.contains('cart-remove')) {
        const button = event.target;
        const index = parseInt(button.dataset.index, 10);
        removeItem(index);
    }
});

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

displayCart();













//---------------------------------------------------------------------------------------------------//

// Function to handle the remove button click
// function removeItem(event) {
//   var removeButton = event.target;
//   var cartBox = removeButton.parentNode;
//   cartBox.remove();

//   updateTotal();
// }

// // Event listener to handle remove button clicks
// var removeButtons = document.getElementsByClassName('cart-remove');
// for (var i = 0; i < removeButtons.length; i++) {
//   removeButtons[i].addEventListener('click', removeItem);
// }

// // Function to update the total price
// function updateTotal() {
//   var total = 0;

//   // Loop through each product in the cart
//   for (var i = 0; i < quantityInputs.length; i++) {
//     var quantity = parseInt(quantityInputs[i].value);
//     var price = parseFloat(priceElements[i].textContent.replace('KES ', ''));
//     var productTotal = quantity * price;

//     total += productTotal;
//   }

//   totalElement.textContent = 'KES ' + total.toFixed(2);
// }

// // Event listener to update the total when quantity inputs change
// for (var i = 0; i < quantityInputs.length; i++) {
//   quantityInputs[i].addEventListener('change', updateTotal);
// }

// // Call the updateTotal function initially to calculate the total
// updateTotal();





// // Update cart with selected products
// if (selectedProducts && selectedProducts.length > 0) {
//   selectedProducts.forEach(productId => {
    
//     // Perform logic to add selected products to the cart
//     // You can use the productId to fetch product details from a database or an array of products
//     // and dynamically generate HTML elements to display the product information in the cartContent element

//     // Example code to add a product to the cart
//     var cartBox = document.createElement('div');
//     cartBox.classList.add('cart-box');

//     // Add product details to the cart box
//     // ...

//     // Append the cart box to the cart content
//     cartContent.appendChild(cartBox);
//   });
// }