window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector("#menu-bars");
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header .navbar a');
    const cartIcon = document.querySelector("#cart-icon");
    const cartQuantity = document.querySelector("#cart-icon .quantity");
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
  
        const productId = button.getAttribute('data-product-id');
        selectedProducts.push(productId);
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




