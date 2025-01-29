let products = [
    {
        "title": "Батон",
        "price": 200,
        "image":"https://lh5.googleusercontent.com/proxy/8XulTcXi66z_k_TuFRh9qszlOTzWH3Q2eF5-Ql1VC4WL5VQlti7Z6gf9cs68D2GGPtCaiXEaijXX3A",
        "description":"самый известный в наших краях вид хлеба, который пекут из пшеничной муки высшего сорта в продолговатой округлой форме",

    },
    {
        "title": "Памидор",
        "price": 250,
        "image":"https://calorizator.ru/sites/default/files/imagecache/product_512/product/tomato.jpg",
        "description":"отличный источник калия и витаминов С, К и А. Кроме того, помидоры особенно богаты ликопином, важным фитонутриентом с антиоксидантными свойствами"
    },
    {
        "title": "Огурец",
        "price": 185,
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1t5-4iGrZgnKEqnoAO0KsvNQjfFFzsVDvoATpVWMXsus49vniv6nrROtPY5ny1fd33Q&usqp=CAU",
        "description":"В огурцах высокое содержание витамина K, который отвечает за свертываемость крови, витамина C, способствующего общему укреплению организма, а также витамина E и некоторых витаминов группы B (В2, В3 и В4). В свежих огурцах содержится большое количество калия.",

    },
    {
        "title": "Морковка",
        "price": 199,
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoHacEQUzNVeRmDuAyVjuJUm2H3wEhJ0DQy7RFA2JD26T-C5H7BEnQj3Ss7f414U8jbk&usqp=CAU",
        "description":"Она имеет пурпурную кожицу и блестящую желто-оранжевую сердцевину. Хотя слегка острый, ореховый вкус и сочно-хрустящая текстура моркови делают ее пригодной для употребления в пищу в сыром или приготовленном виде, некоторые дегустаторы считают ее «заметно более горькой» в приготовленном виде."
    },
    {
        "title": "Картошка",
        "price": 245,
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKW2vWcBCeASYj7XkMxgf0eITQpYcLhShqweQUa0yN84Si7Lvy8mvjGVRlxbnJWMuucpU&usqp=CAU",
        "description":"крахмалистый клубневый овощ, произрастающий в Америке, который употребляется в пищу в качестве основного продукта питания во многих частях мира",

    },
    {
        "title": "Тыква",
        "price": 399,
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw3_IlI8mzkVFEch9rZqcXgQdPQacgY2tMgUXyBLE58xXMSfy_jJyBkONBV3UcPrA6UQA&usqp=CAU",
        "description":"живописный оранжевый плод травянистого растения семейства Тыквенные, родственник кабачка и дыни"
    },
    {
        "title": "Яйцо",
        "price": 100,
        "image":"data:image/jpeg;base64,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",
        "description":"Яйцо́ — пищевой продукт. Состоит оно из белка, желтка и известковой скорлупы. Цвет скорлупы и размер яйца зависит от породы курицы-несушки. Яйца употребляют в пищу во всем мире: их варят, жарят, запекают и добавляют в салаты и выпечку.",

    },
    {
        "title": "Рьба",
        "price": 300,
        "image":"data:image/jpeg;base64,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",
        "description":"вкуснейший марской вкус риби са дна моря может стать исщо вкуснея если дабавить немнога соли",

    },

]


// Функція для отримання значення кукі за ім'ям
function getCookieValue(cookieName) {
    // Розділяємо всі куки на окремі частини
    const cookies = document.cookie.split(';');
 
 
    // Шукаємо куки з вказаним ім'ям
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim(); // Видаляємо зайві пробіли
 
 
        // Перевіряємо, чи починається поточне кукі з шуканого імені
        if (cookie.startsWith(cookieName + '=')) {
            // Якщо так, повертаємо значення кукі
            return cookie.substring(cookieName.length + 1); // +1 для пропуску символу "="
        }
    }
    // Якщо кукі з вказаним іменем не знайдено, повертаємо порожній рядок або можна повернути null
    return '';
 }
 
 
 //створюємо класс кошику з усіма властивостями та методами(діями)
 class Cart{
    constructor(){
        this.products = []
        this.cartCounter = document.querySelector('.cart-container span');// отримуємо лічильник кількості товарів у кошику
        this.loadCartFromCookies(); // завантажуємо з кукі-файлів раніше додані в кошик товари
    }
    addItem(productIndex) {//додання товару в кошик
        let productInCart = this.products.find(product => product.productIndex === productIndex);//перевіярємо чи вже існує цей товар в корзині
        if (productInCart) {//якщо існує то збільшуємо його кількість
            productInCart.quantity += 1;
        }else {//якщо товара нема то додаємо його та вказуємо кількість 1
            this.products.push({
                productIndex,
                quantity:1
            });
        }
        this.updateCounter(); // Оновлюємо лічильник товарів
        this.saveCartToCookies();// зберегаємо в кукі
    }
 
 
    updateCounter() {//оновлення загальної кількості товарів
        let count = 0;
        for (let i = 0;i < this.products.length;i++) { // проходимося по всіх товарах
            count += this.products[i].quantity; // рахуємо кількість усіх товарів
        }
        this.cartCounter.innerHTML = count; // оновлюємо лічильник на сторінці
    }
    // Зміна кількості одного товара
    updateQuantity(productIndex, newQuantity) {
        let productInCart = this.products.find(product => product.productIndex === productIndex);//перевіярємо чи вже існує цей товар в корзині
        if (productInCart) {
            productInCart.quantity = newQuantity;
            if (productInCart.quantity == 0) {
                this.products = this.products.filter(product => product.productIndex !== productIndex);
            }
            this.updateCounter();
            this.saveCartToCookies();
        }
    }
    saveCartToCookies() {//збереження кошику в кукі
        let cartJSON = JSON.stringify(this.products);
        document.cookie = `cart=${cartJSON}; max-age=${60 * 60 * 24 * 7}; path=/`;
    }
    loadCartFromCookies() {
        let cartCookie = getCookieValue('cart');
        if (cartCookie && cartCookie !== '') {
            this.products = JSON.parse(cartCookie);
            this.updateCounter();
        }
    }
    calculateTotal(){
        let total = 0;
        for(let i = 0;i < this.products.length;i++){
            total += products[this.products[i].productIndex].price * this.products[i].quantity;
        }
       
        return total;
    }
 }
 const cart = new Cart();
 
 
 function getProductCart(product){
    return `<article class="item">
            <img src="${product.image}">
            <h2>${product.title}</h2>
            <p class="item-desc">${product.description}</p>
            <p class="item-price">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-currency-hryvnia"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a2.64 2.64 0 0 1 2.562 -2h3.376a2.64 2.64 0 0 1 2.562 2a2.57 2.57 0 0 1 -1.344 2.922l-5.876 2.938a3.338 3.338 0 0 0 -1.78 3.64a3.11 3.11 0 0 0 3.05 2.5h2.888a2.64 2.64 0 0 0 2.562 -2"></path><path d="M6 10h12"></path><path d="M6 14h12"></path></svg>
                ${product.price}
            </p>
            <button class="item-buy">
                <svg class="bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M12.5 17h-6.5v-14h-2"></path><path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5"></path><path d="M16 19h6"></path><path d="M19 16v6"></path></svg>
                Купити
            </button>
        </article>`
 }
 //виведення на екран всіх товарів
 function printProducts(_products) {
    let localProducts = _products || products;
    //контейнер в якому знаходяться всі товари
    let itemsContainer = document.querySelector(".items");
    itemsContainer.innerHTML = "";
    if(!localProducts.length) {
        itemsContainer.innerHTML = "<h1>Нема товару</h1>";
        return;
    }
    //проходимось по всім товарам та додаємо верстку зі значеннями кожного товару
    for(let i = 0;i < localProducts.length;i++){
        itemsContainer.innerHTML += getProductCart(localProducts[i]);
    }
    //отримуємо всі кнопки "купити" та додаємо на кожну кнопку подію для додання в кошик
    let buyButtons = document.querySelectorAll(".item-buy");
    for(let i = 0;i < buyButtons.length;i++){
        buyButtons[i].addEventListener("click",() => cart.addItem(i))
    }
 }
 
 
 printProducts();
 let search = document.querySelector(".search");
 function onSearch(event){
    let localProducts = products.filter(product =>
        product.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
    console.log(localProducts,event.target.value)
    printProducts(localProducts);
 }
 search.addEventListener("input",onSearch)
