
import{ cart,addtocart } from "../data/cart.js";
import { product } from "../data/products.js";




// this  is we combining all the prodcuts into a single html element using loop
let html='';
product.forEach((product) => {
    
 html= html+`
            <div class="product-container">
            <div class="product-image-container">
            <img class="product-image"
                src="${product.image }">
            </div>

            <div class="product-name limit-text-to-2-lines">
            ${product.name}
            </div>

            <div class="product-rating-container">
            <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
                ${product.rating.count}
            </div>
            </div>

            <div class="product-price">
            ₹ ${product.price}
            </div>

            <div class="product-quantity-container">
            <select class="quantity-select" data-product-id="${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
            </div>


            <div class="added-to-cart-message " style="display: none;">  <img src="images/icons/checkmark.png" > Added </div>

            
    <button class="add-to-cart-button button-primary   js-add-to-cart" data-product-id="${product.id}">    
            Add to Cart
            </button>
            </div> `



});

// MAIN FUNCTION STARTS HERE 65 TO 78

//console.log(html); // this is just to see whether the combining html is correct
document.querySelector('.js-grid').innerHTML=html; // adding the javascript to html 
// adding pproducts to cart list
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', (event) => {
        const productId = event.target.dataset.productId;

        // Get the selected quantity from the corresponding dropdown list
        const quantitySelect = event.target.closest('.product-container').querySelector('.quantity-select');
        const selectedQuantity = parseInt(quantitySelect.value, 10);

        // Add the product to the cart with the selected quantity
        addtocart(productId, selectedQuantity); // Make sure your `addtocart` function supports quantity
        cartnumberUpdate();

        // Show the "Added to Cart" message just above the clicked button
        const addedToCartMessage = event.target.closest('.product-container').querySelector('.added-to-cart-message');
        addedToCartMessage.style.display = 'block';

        // Hide the message after a delay (e.g., 1 second)
        setTimeout(() => {
            addedToCartMessage.style.display = 'none';
        }, 1000);
    });
});

  
  
function cartnumberUpdate() {
    // Calculate the total cart quantity
    let cartQuantity=0;
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
  
    // Update the cart quantity element
    const cartQuantityElement = document.querySelector('.js-cart-quantity');
    cartQuantityElement.innerHTML = cartQuantity;
  
    // Store the cart quantity in localStorage
    localStorage.setItem('cartQuantity', cartQuantity.toString());
  }
  
  // Call the function to update the cart quantity
  cartnumberUpdate();
  
  // To retrieve and display the cart quantity after a page refresh
  const storedCartQuantity = localStorage.getItem('cartQuantity');
  if (storedCartQuantity !== null) {
    const cartQuantityElement = document.querySelector('.js-cart-quantity');
    cartQuantityElement.innerHTML = storedCartQuantity;
  }
  

  