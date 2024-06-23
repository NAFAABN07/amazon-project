import { cart,addtocart } from "../data/cart.js";
import {products} from"../data/products.js";
let html=``;
products.forEach((product)=>{
html +=`
<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${(product.rating.stars)*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
           $ ${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container js-product-quantity-${product.id}">
            <select>
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
          <div class="added-to-cart">
                      <img src="images/icons/checkmark.png">
                      Added
                    </div>
          <div class="product-spacer product-spacer-${product.id}">added</div>

          

          <button class="add-to-cart-button button-primary js-add-to-cart-button "
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
`
})
document.querySelector(`.js-products-gride`)
.innerHTML = html;


function cartquantity(){
    let Z=0;
    cart.forEach((obje)=>{
      let x = obje.quantity
      Z += x;
    })

    document.querySelector(`.js-cart-quantity`)
    .innerHTML = Z;
}
cartquantity()
function time(productId){
    const added =  document.querySelector(`.product-spacer-${productId}`);
    added.classList.add(`nafaa`)
    setTimeout(()=>{
      added.classList.remove(`nafaa`)
    },1000);
}

 document.querySelectorAll(`.js-add-to-cart-button`)
  .forEach((butto) => {
   butto.addEventListener(`click`, () =>{
    const productId = butto.dataset.productId;
    addtocart(productId);
    cartquantity();
    time(productId);
    
  });

});

