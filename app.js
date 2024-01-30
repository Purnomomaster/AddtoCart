let openShop = document.querySelector('.shop');
let closeShop = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

let products = [
    {
        id: 1,
        name: 'Product Name 1',
        image: '1.png',
        price: 11
    },
    {
        id: 2,
        name: 'Product Name 2',
        image: '2.png',
        price: 12
    },
    {
        id: 3,
        name: 'Product Name 3',
        image: '3.png',
        price: 13
    },
    {
        id: 4,
        name: 'Product Name 4',
        image: '4.jpg',
        price: 14
    },
    {
        id: 5,
        name: 'Product Name 5',
        image: '5.png',
        price: 15
    },
    {
        id: 6,
        name: 'Product Name 6',
        image: '6.png',
        price: 16
    },
];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();

openShop.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShop.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let listCards = [];
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
        prices = products[key].price;
    }reloadCard();
}
function reloadCard(){
    listCard.innerHTML ="";
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) =>{
        totalPrice += value.price;
        count += value.quantity;
        
        if(value != null){
            let newDiv = document.createElement('li')
            newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div>${value.name}</div>
            <div>${value.price}</div>
            <div>${value.quantity}</div>
            <div>
                <button onclick="changeQuantity(${key},${value.quantity - 1})"></button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key},${value.quantity + 1})"></button>
            </div>`
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        listCards[key].classList.add('hidden');
    } else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity*prices;
    }reloadCard();
}