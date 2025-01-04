window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector("#menu-bars");
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header .navbar a');
  const cartIcon = document.querySelector("#cart-icon");
  const cartQuantity = document.querySelector(".quantity");
  let cartCount = 0;
  let selectedProducts = [];

  // Toggle the menu and navbar
  menu.addEventListener('click', () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  });

  // Set the active link based on scroll position
  window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // Add product to cart on click
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      cartQuantity.textContent = cartCount;



      const product = button.closest('.product');
      const productName = product.querySelector('h5').textContent;
      const productPriceText = product.querySelector('span').textContent;
      const productImage = product.querySelector('img').src;

      const productPrice = parseFloat(productPriceText.replace("KES", "").replace(",", ""));

      const cartItem = {
        title: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
      }
      addToCart(cartItem);
      console.log(cartItem);

      function addToCart(product) {
        const cart = getCart();

        const existingItemIndex = cart.findIndex(product => product.image === productImage);

        if (existingItemIndex !== -1) {
          cart[existingItemIndex].quantity++;
        } else {
          cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
      }

      function getCart() {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
      }





      // const productId = button.getAttribute('data-product-id');
      // selectedProducts.push(productId);
      // localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    });
  });
});



document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");   
}

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
}













//cart
// document.querySelectorAll('.add-to-cart').forEach((button, index) => {
//   button.addEventListener('click', () => {
//       addProductToCart(index);
//   });
// });
//
// function addProductToCart(productIndex) {
//   const product = {
//       title: document.querySelectorAll('.card-title')[productIndex].innerText,
//       price: document.querySelectorAll('.price')[productIndex].innerText,
//       image: document.querySelectorAll('img')[productIndex].src
//   };
//
//   localStorage.setItem(`product-${productIndex}`, JSON.stringify(product));
//   displayCart();
// }
//
// function displayCart() {
//   let cartContent = '';
//   for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       if (key.startsWith('product-')) {
//           const product = JSON.parse(localStorage.getItem(key));
//           cartContent += `
//               <div class="cart-item">
//                   <img src="${product.image}" alt="${product.title}">
//                   <div class="cart-details">
//                       <h3>${product.title}</h3>
//                       <p>${product.price}</p>
//                   </div>
//               </div>
//           `;
//       }
//   }
//
//   document.getElementById('cartContent').innerHTML = cartContent;
// }
//
// displayCart();