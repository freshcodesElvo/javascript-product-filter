const data = [
    
    {
    id: 1,
    product_name: "Samsung Galaxy Watch 5",
    img: "https://www.phoneplacekenya.com/wp-content/uploads/2022/08/Samsung-Galaxy-Watch-5-C.jpg",
    price: 7000,
    cat: "smart watch"
    },
    {
    id: 2,
    product_name: "Samsung Galaxy Watch 8",
    img: "https://m.media-amazon.com/images/I/61j-K4ZB6IL._AC_SY675_.jpg",
    price: 17000,
    cat: "smart watch"
    },
    {
    id: 3,
    product_name: "Galaxy Watch 5 pro",
    img: "https://i.ebayimg.com/images/g/EsIAAOSwrcxlcpkb/s-l1200.png",
    price: 4500,
    cat: "smart watch"
    },
    {
    id: 4,
    product_name: "Oppo Watch 5",
    img: "https://rukminim1.flixcart.com/image/900/900/xif0q/smartwatch/e/z/p/-original-imahfa7xekwfg7cc.jpeg?q=90",
    price: 5500,
    cat: "smart watch"
    },
    {
    id: 5,
    product_name: "Smart Watch for Android Phones",
    img: "https://m.media-amazon.com/images/I/61CN+JIJ49S._AC_UF1000,1000_QL80_.jpg",
    price: 4000,
    cat: "smart watch"
    },
    {
    id: 6,
    product_name: "Oraimo Watch 5",
    img: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/17/9457771/1.jpg?6296",
    price: 6000,
    cat: "digital"
    },
    {
    id: 7,
    product_name: "Geneva",
    img: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/6745332/1.jpg?7238",
    price: 400,
    cat: "analogue"
    },
    {
    id: 8,
    product_name: "Puma Watch",
    img: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/8967771/1.jpg?6955",
    price: 7000,
    cat: "digital"
    },
    {
    id: 9,
    product_name: "Casio",
    img: "https://zeblaze.info/images/product_zeblaze_ares.jpg",
    price: 7000,
    cat: "analog"
    },
    {
    id: 10,
    product_name: "Samsung Galaxy Watch 5",
    img: "https://www.phoneplacekenya.com/wp-content/uploads/2022/08/Samsung-Galaxy-Watch-5-C.jpg",
    price: 7000,
    cat: "smart watch"
    }
]

const product_container = document.querySelector(".products");
const search_input = document.querySelector(".search");
const categories_container = document.querySelector(".cats");
const price_range = document.querySelector(".price-range");
const price_value = document.querySelector(".price-value");


const display_products = (filtered_products) =>{
    product_container.innerHTML = filtered_products.map(product => `
        <div class="product">
            <img src="${product.img}" alt="${product.product_name}">
            <h3>${product.product_name}</h3>
            <p>Price: Ksh ${product.price}</p>
        </div>
    `).join("");
}
display_products(data);

search_input.addEventListener("keyup", (e) => {
    const value = (e.target.value.toLowerCase());
    if(value){
        display_products(data.filter(item => item.product_name.toLowerCase().includes(value)));
        //display_products(data.filter(item => item.product_name.toLowerCase().indexOf(value) !==-1));

    }
    else{
        display_products(data)
    }
})

const set_categories = () => {
    const all_cats = data.map(item =>item.cat)
    const categories =   [
        "All",
        ...all_cats.filter((item, i) =>{
        return all_cats.indexOf(item) === i;
    })];
console.log(categories)
categories_container.innerHTML = categories.map(cat => `
              <span class="cat">${cat}</span>
    
    
    `).join("")

    categories_container.addEventListener("click", (e) => {
        const category = e.target.textContent;
        if(category === "All"){
            display_products(data);
        }
        else{
            display_products(data.filter((item) => item.cat === category));
        }
    }
)
}

const set_prices = () => {

    
    const price_list = data.map((item) => item.price);
    const min_price = Math.min(...price_list);
    const max_price = Math.max(...price_list)

    price_range.min = min_price
    price_range.max = max_price
    console.log(max_price)
    price_range.value = max_price
    price_value.innerText = `Ksh ${max_price}`

    price_range.addEventListener("input", (e) => {
         price_value.innerText =  "Ksh" + e.target.value;
         display_products(data.filter(item => item.price <=e.target.value))
        })
};



set_categories();
set_prices();