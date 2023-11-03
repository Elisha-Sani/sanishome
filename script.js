window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector("#menu-bars");
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header .navbar a');
    const cartIcon = document.querySelector("#cart-icon");
    const cartQuantity = document.querySelector("#cart-icon .quantity");
    let cartCount = 0;
    let selectedProducts = [];
var items = JSON.parse(localStorage.getItem('selectedProducts'));
if(items != null) {
if ( items.length > 0){
  let  cartItems = items.length;
  cartQuantity.innerHTML= cartItems;
}
}
  
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
    function generateRandomId(length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomId = '';
    
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
      }
    
      return randomId;
    }
    
    // Usage example to generate a 10-character random ID:
    
    // Add product to cart on click
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        cartCount++;
        cartQuantity.textContent = cartCount;
        let price = e.target.parentElement.querySelector('.price').innerHTML;
        let description = e.target.parentElement.querySelector('.card-description').innerHTML;

        const randomId = generateRandomId(10);

        let  Product = {
          "id":randomId,
          description: description,
          "price": price,
        }

        console.log(Product);
        const productId = button.getAttribute('data-product-id');
        selectedProducts.push(Product);
        localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
      });
    });
  });
  
  

document.querySelector("#search-icon").onclick = () => {
    document.querySelector("#search-form").classList.toggle("active");   
}

document.querySelector("#close").onclick = () => {
    document.querySelector("#search-form").classList.remove("active");
}




