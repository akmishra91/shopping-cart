const findListItems = document.querySelector(".list-of-items");

fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(arrayOfProducts => renderAllItems(arrayOfProducts))


function renderAllItems(arrayOfProducts) {
    debugger;
     arrayOfProducts.forEach(product => renderOneItem(product))
}

const cartContent = document.querySelector('#cart-content');
function renderOneItem(product){
   const prodList = document.createElement('ul');
   prodList.className = 'product-list';
   prodList.innerHTML = `
       <div id="${product.id}">
            <img src="${product.image}" class="image" alt="${product.title}">
            <div {class="product-item__content">
            <h2>${product.title}</h2>
            <h3>\$${product.price}</h3>
            <p>${product.description}</p>
            <button class="add-item">Add to Cart</button>
            </div>
    `
    cartContent.append(prodList);
}

function renderAllCartItems(cartItemsArray){
    cartItemsArray.forEach(cartItem => renderCartItem(cartItem))
}

function renderCartItem(cartItem){
  const list_items = document.createElement("li");
  list_items.innerHTML = `
  <p id="pTag"> ${cartItem.product.title} : $${cartItem.product.price}</p>
  `
  findListItems.append(list_items);
}

const addButton = prodList.querySelector(".add-item");
addButton.addEventListner("click", event => {
    findListItems.innerText = "";

    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(
                {
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    image: product.image,
                    id: product.id
                }
            )
        })
            .then(res=>res.json())
            .then(newCartItem => {
                cartArray.push(newCartItem);
                renderAllCartItems(cartArray)
            })

})
