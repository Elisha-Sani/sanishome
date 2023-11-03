// Get the elements from the DOM
const quantityInputs = document.getElementsByClassName('cart-quantity');
const priceElements = document.getElementsByClassName('cart-price');
const totalElement = document.querySelector('.total-price');
const cartContent = document.querySelector('.cart-content');

// Function to handle the remove button click
function removeItem(event) {
  const removeButton = event.target;
  const cartBox = removeButton.parentNode;
  cartBox.remove();

  updateTotal();
}
var selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));

// Event listener to handle remove button clicks
const removeButtons = document.getElementsByClassName('cart-remove');
for (var i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener('click', removeItem);
}

// Function to update the total price
// function updateTotal() {
//   var total = 0;

//   // Loop through each product in the cart
//   for (var i = 0; i < quantityInputs.length; i++) {
//     var quantity = parseInt(quantityInputs[i].value);
//     var price = parseFloat(priceElements[i].textContent.replace('KES ', ''));
//     var productTotal = quantity * price;

//     total += productTotal;
//     return total
//   }
//   return total;
// }

// Event listener to update the total when quantity inputs change
for (var i = 0; i < quantityInputs.length; i++) {
  quantityInputs[i].addEventListener('change', updateTotal);
}

// Call the updateTotal function initially to calculate the total
console.log(updateTotal())

// Get selected products from local storage

let cartDIv = document.querySelector(".cartDIv");
console.log(selectedProducts)
// Update cart with selected products
if (selectedProducts && selectedProducts.length > 0) {
  selectedProducts.forEach(product => {
    console.log(product)
    const price = product.price;

    // Remove "kes" and keep the number part using a regular expression
    const resultString = price.replace(/KES\s+/g, '');

    // Perform logic to add selected products to the cart
    // You can use the productId to fetch product details from a database or an array of products
    // and dynamically generate HTML elements to display the product information in the cartContent element

    // Example code to add a product to the cart
    var cartBox = document.createElement('div');
    cartBox.classList.add('cart-box');

    let cart  = `
    <div class="cart">
    <h2 class="cart-title">Shopping Cart</h2>
    <div class="cart-content">
        <div class="cart-box">
            <img src="./products/img3.png" alt="" class="cart-img">
            <div class="detail-box">
                <div class="cart-product-title">${product.description}</div>
                <div class="cart-price">KES ${resultString}</div>
                <input type="number" value="0" class="cart-quantity">
            </div>
            <!--Remove button-->
            <i class="fa-solid fa-trash cart-remove"></i>
        </div>
    </div>
   

   
</div>

    `

  
    cartDIv.insertAdjacentHTML("afterbegin",cart)
  });
}


function updateTotal(){
  let prices = [];
  var selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));

if(selectedProducts != null){
  selectedProducts.forEach(item=>{
    console.log(item)
    const price = item.price;

    // Remove "kes" and keep the number part using a regular expression
    const resultString = price.replace(/\D/g, '');

    let intPrice = parseInt(resultString)
    console.log(intPrice)
     prices.push(intPrice)
  })
}
  let Total = 0;

  for (let i = 0; i < prices.length; i++) {
    Total += prices[i];
  }
  return Total
  
}

updateTotal();
totalElement.innerHTML = updateTotal();