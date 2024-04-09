import products from './products.js';
import cart from './cart.js';

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

// 加载布局文件
const loadTemplate = () => {
    fetch('./template.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
    })
}
loadTemplate();
const initApp = () => {
     // 加载商品
     let listProductHTML = document.querySelector('.listProduct');
     listProductHTML.innerHTML = null;
     
     products.forEach(product => {
         let newProduct = document.createElement('div');
         newProduct.classList.add('item');
         newProduct.innerHTML = 
         `<a href="./detail.html?id=${product.id}">
             <img src="${product.image}">
         </a>
         <h2>${product.name}</h2>
         <div class="price">￥${product.price}</div>
         <button 
             class="addCart" 
             data-id='${product.id}'>
                 Add To Cart
         </button>`;
         listProductHTML.appendChild(newProduct);
    });
}
// 在 index.js 文件中添加以下代码来向页面中添加更多内容
const appDiv = document.getElementById('app');
const temporaryContentDiv = document.getElementById('temporaryContent');

// 创建一个新的 div 元素
const newDiv = document.createElement('div');
newDiv.textContent = '更多内容';

// 将新的 div 元素添加到页面中
appDiv.appendChild(newDiv);
