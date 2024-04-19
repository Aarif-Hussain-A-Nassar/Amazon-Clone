 export let cart=JSON.parse(localStorage.getItem('cart'));

 if(!cart) {

  cart=[];///if cart is null then it will give this value to the cart object
 }
 
 [{
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity:1,
    },{
      productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity:2, 

 }]; 


    // function to save the cart into localstorage
    function saveCartToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    export function addtocart(productId, selectedQuantity) {
      // Check if the product is already in the cart
      const matchingItemIndex = cart.findIndex((cartItem) => cartItem.productId === productId);
  
      if (matchingItemIndex !== -1) {
          // Product already exists in the cart; update the quantity
          cart[matchingItemIndex].quantity += selectedQuantity;
      } else {
          // Product is not in the cart; add it with the selected quantity
          cart.push({
              productId: productId,
              quantity: selectedQuantity,
          });
      }
  
      // Save the cart to local storage
      saveCartToLocalStorage();
  }
  
    


    export function removefromcart(productId){

      let newCart=[];

      cart.forEach((cartItem) => {

        if(cartItem.productId!==productId)
        {
          newCart.push(cartItem);
        }
      });

      cart=newCart;

      saveCartToLocalStorage(); // saves cart to local storage

    }