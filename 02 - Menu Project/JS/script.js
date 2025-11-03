const menu = [
    {
        id: 1,
        title: 'Saba English Omelette',
        category:'breakfast',
        price: 20,
        img: "./pictures/breakfast1.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!`,
    },
    {
        id: 2,
        title: 'Saba taco',
        category:'lunch',
        price: 13,
        img: "./pictures/breakfast3.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 3,
        title: 'SabaBucks',
        category:'drinks',
        price: 5,
        img : "./pictures/starBucksshake.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 4,
        title: 'Saba Biskivit',
        category:'shakes',
        price: 25,
        img : "./pictures/shake4.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 5,
        title: 'Saba Snack',
        category:'lunch',
        price: 12,
        img : "./pictures/snack1.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 6,
        title: 'Saba Speacialdish',
        category:'lunch',
        price: 35,
        img : "./pictures/photo-1598514983318-2f64f8f4796c.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 7,
        title: 'Jingoolia salad',
        category:'lunch',
        price: 17,
        img : "./pictures/salad1.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 8,
        title: 'Saba Manhattan',
        category:'drinks',
        price: 10,
        img : "./pictures/manhattancocktail.jpeg" ,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 9,
        title: 'Saba tarkibi porrrrrroooo',
        category:'breakfast',
        price: 30,
        img : "./pictures/breakfast.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 10,
        title: 'Saba sagiaragh',
        category:'drinks',
        price: 5,
        img : "./pictures/cocktail1.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 11,
        title: 'Sababurger',
        category:'lunch',
        price: 17,
        img : "./pictures/lunch3.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 12,
        title: 'Jingoolia speacial fries',
        category:'lunch',
        price: 25,
        img : "./pictures/Hamburger-and-french-fries-paper-box.webp", 
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 13,
        title: 'Saba latte',
        category:'drinks',
        price: 10,
        img : "./pictures/hotdrinks1.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 14,
        title: 'Jingoolia salad',
        category:'breakfast',
        price: 17,
        img : "./pictures/salad1.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 15,
        title: 'Saba speacial shake',
        category:'shakes',
        price: 15,
        img : "./pictures/shake3.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 16,
        title: 'Saba pancake🥹',
        category:'breakfast',
        price: 100,
        img : "./pictures/breakfastpancake.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 17,
        title: 'Saba orange cocktail',
        category:'breakfast',
        price: 8,
        img: "./pictures/cocktail2.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!`,
    },
    {
        id: 18,
        title: 'Saba cocktail',
        category:'drinks',
        price: 12,
        img: "./pictures/cocktail4.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!`,
    }
]
 
// const menuCentre = document.querySelector('.menu')

// window.addEventListener('DOMContentLoaded', function () {
//     let displayMenu = menu.map(function (item) {
//         return `<article class="item">
//         <img src= ${item.img} alt=${item.title}>
//         <div class="item_info">
//             <header>
//                 <h4 class="item_name">${item.title}</h4>
//                 <h4 class="price">$${item.price}</h4>
//             </header>
//             <p>${item.desc}</p>
//         </div>
//     </article>`;
//     })
//     displayMenu = displayMenu.join(" ")
//     menuCentre.innerHTML = displayMenu;
// })

const menuMain = document.querySelector('.menu');
const btnsSection = document.querySelector('.buttons')

// Load Items
window.addEventListener('DOMContentLoaded',() => {
    displayMenuItems(menu);
    displayMenuButtons();
});


// display Menu items
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {

        return `<article class="item">
        <img src=${item.img} alt=${item.title}>
        <div class="item_info">
            <header>
                <h4 class="item_name">${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item_text">${item.desc}</p>
        </div>
    </article>`
        
    }).join("");
    menuMain.innerHTML = displayMenu;
};


// display Buttons Function
function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values;
    }, ['all']
    );
    
    const categoriesBtns = categories.map(function (category) {
        return `<button class="btn" id="all" type="button" data-id=${category}>${category}</button>`
    }).join("")
    
    btnsSection.innerHTML = categoriesBtns
    const btns = document.querySelectorAll('.btn');

    // Filter Items
    btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category)
                    return menuItem;
            });
            if (category === 'all') {
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
};
