import { cart, removefromcart,updatQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { updatCartQuantity } from "../data/cart.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

const today = dayjs();
const deliveryday = today.add(7,`days`);
console.log(deliveryday.format(`dddd DD MMMM YYYY`))

let htmlafi = ``;
cart.forEach((cartitems)=>{
  const prodo = cartitems.productId;
  let matching;
  products.forEach((product)=>{
      if(product.id === prodo){
        matching = product;
      }
  })
  htmlafi += `
  <div class="cart-item-container js-cart-item-container-${matching.id}">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src=${matching.image}>

      <div class="cart-item-details">
        <div class="product-name">
        ${matching.name}
        </div>
        <div class="product-price">
          $${(matching.priceCents/100).toFixed(2)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label quantity-label-${matching.id}">${cartitems.quantity}</span>
          </span>
          <span class="js-update-quantity-link
          update-quantity-link link-primary" data-product-id="${matching.id}">
            Update
          </span>
          <input class="quantity-input js-quantity-input-${matching.id}">
          <span class="save-quantity-link link-primary js-save-quantity-link" 
          data-product-id="${matching.id}">
          save
          </span>
          <span class="delete-quantity-link link-primary-js link-primary"
           data-product-id="${matching.id}">
            Delete
          </span>
          
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${matching.id}">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matching.id}">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matching.id}">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
  `
  
})
document.querySelector(`.js-order-summary`).
  innerHTML = htmlafi;
 updatCartQuantity();
 
    
   
  
  
  document.querySelectorAll(`.link-primary-js`)
  .forEach((dl)=>{
  dl.addEventListener(`click`,()=>{
  const productId = dl.dataset.productId;
  removefromcart(productId);
  updatCartQuantity()
  const div = document.querySelector(`.js-cart-item-container-${productId}`)
    div.remove()

  })
  });
  document.querySelectorAll(`.js-update-quantity-link`)
  .forEach((por)=>{
    por.addEventListener(`click`,()=>{
      const productId = por.dataset.productId;
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.classList.add('is-editing-quantity')

   
  })
  })
document.querySelectorAll(`.js-save-quantity-link`)
.forEach((link)=>{
  link.addEventListener(`click`,()=>{
  
    const productId = link.dataset.productId;
    const val = document.querySelector(`.js-quantity-input-${productId}`)
    const newQuantity = Number(val.value)
    updatQuantity(productId,newQuantity);
   
    const xxx = document.querySelector(`.quantity-label-${productId}`)
    
    xxx.innerHTML = newQuantity;
    updatCartQuantity();
    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    container.classList.remove('is-editing-quantity');
  });
})
  