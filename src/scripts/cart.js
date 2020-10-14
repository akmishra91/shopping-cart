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
       <div>
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

// const productList = {
//     products = [

//     ],

//     render(){
//         const renderHook = document.getElementById('cart-content');
       

//         for(const prod of this.products){
//             const prodEL = document.createElement('li');
//             prodEL.className = 'product-item';
//             prodEL.innerHTML = `
//             <div>
//             <img src="${prod.imageUrl}" alt="${prod.title}" >
//             <div {class="product-item__content">
//             <h2>${prod.title}</h2>
//             <h3>\$${prod.price}</h3>
//             <p>${prod.description}</p>
//             <button>Add to Cart</button>
//             </div>
//             `;
//             prodList.append(prodEL);
//         }
//         renderHook.append(prodList);
//     }
// }