export let cart = JSON.parse(localStorage.getItem(`cart`))||
[{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity : 1,
},{
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 2,
}];


function saveToStorage() {
  localStorage.setItem(`cart` , JSON.stringify(cart))
}

export function addtocart(productId){
  let matchingItem;
  cart.forEach((produc)=>{
    if(productId === produc.productId ){
      matchingItem = produc;
    }
  });
  console.log(cart)
  const xx = document.querySelector(`.js-product-quantity-${productId}`);
  const quantit = Number(xx.querySelector('select').value);
  if(matchingItem){
      matchingItem.quantity += quantit;
    }else{
      cart.push({
      productId: productId,
      quantity: quantit
      });
    }
    saveToStorage()
}

export function removefromcart(productId){
  const newcart = [];
  cart.forEach((produc)=>{
    if(produc.productId !== productId){
      newcart.push(produc);
    }
  });
  cart = newcart;
  saveToStorage()
} 

export function updatCartQuantity(){ 
  let y =1;
      cart.forEach((quan)=>{
         const x = quan.quantity;
         y += x;
        
      })
     document.querySelector(`.js-return-to-home-link`)
    .innerHTML = `${y} items `
    }
export function updatQuantity(productId,newQuantity){
     let matchingItem; 
     cart.forEach((cartitems)=>{
        if(productId === cartitems.productId){
          matchingItem = cartitems
        }
      });
      matchingItem.quantity = newQuantity;
      saveToStorage();
    }