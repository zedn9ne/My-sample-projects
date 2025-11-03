const menu = [
    {
        id: 1,
        title: ' English Omelette',
        category:'breakfast',
        price: 20.00,
        img: "./pictures/breakfast1.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!`,
    },
    {
        id: 2,
        title: ' taco',
        category:'lunch',
        price: 13.00,
        img: "./pictures/breakfast3.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 3,
        title: ' Bucks',
        category:'drinks',
        price: 5.00,
        img : "./pictures/starBucksshake.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 4,
        title: '   Biskivit',
        category:'shakes',
        price: 25.00,
        img : "./pictures/shake4.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 5,
        title: ' Snack',
        category:'lunch',
        price: 12.00,
        img : "./pictures/snack1.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 6,
        title: ' Speacial dish',
        category:'lunch',
        price: 35.00,
        img : "./pictures/photo-1598514983318-2f64f8f4796c.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 7,
        title: 'Jingoolia salad',
        category:'lunch',
        price: 17.00,
        img : "./pictures/salad1.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 8,
        title: ' Manhattan',
        category:'drinks',
        price: 10.00,
        img : "./pictures/manhattancocktail.jpeg" ,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 9,
        title: ' tarkibi porrrrrroooo',
        category:'breakfast',
        price: 30.00,
        img : "./pictures/breakfast.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 10,
        title: ' sagiaragh',
        category:'drinks',
        price: 5.00,
        img : "./pictures/cocktail1.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 11,
        title: 'burger',
        category:'lunch',
        price: 17.00,
        img : "./pictures/lunch3.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 12,
        title: 'Jingoolia speacial fries',
        category:'lunch',
        price: 25.00,
        img : "./pictures/Hamburger-and-french-fries-paper-box.webp", 
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 13,
        title: ' latte',
        category:'drinks',
        price: 10.00,
        img : "./pictures/hotdrinks1.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 14,
        title: 'Jingoolia salad',
        category:'breakfast',
        price: 17.00,
        img : "./pictures/salad1.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 15,
        title: ' speacial shake',
        category:'shakes',
        price: 15.00,
        img : "./pictures/shake3.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 16,
        title: ' pancake🥹',
        category:'breakfast',
        price: 100.00,
        img : "./pictures/breakfastpancake.jpeg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!'
    },
    {
        id: 17,
        title: ' orange cocktail',
        category:'drinks',
        price: 8.00,
        img: "./pictures/cocktail2.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!`,
    },
    {
        id: 18,
        title: ' cocktail',
        category:'drinks',
        price: 12.00,
        img: "./pictures/cocktail4.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!`,
    },
    {
        id: 19,
        title: ' Steak',
        category:'dinner',
        price: 45.33,
        img: "./pictures/download.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!`,
    },
    {
        id: 20,
        title: ' dinner Steak',
        category:'dinner',
        price: 60.00,
        img: "./pictures/steak-1.jpg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla eum amet sed debitis eos esse? Facilis, sunt recusandae!`,
    }
]


const menuContainer = document.querySelector('.menu');
const btnsSection = document.querySelector('.buttons');




// load items 
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItmes(menu);
    displaybuttons()
})

// buttons display 
function displaybuttons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values;
    },
        ['all']
    );
    // console.log(categories);

    const categoryBtns = categories.map(function (item) {
        return `<button class="btn" id="all" type="button" data-id=${item}>${item}</button>`
    }).join('')
    btnsSection.innerHTML = categoryBtns
    const buttons = document.querySelectorAll('.btn');
    // filter items
    buttons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            let category = e.currentTarget.dataset.id;
            let menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category)
                    return menuItem;
            });

        
            if (category === 'all') {
                displayMenuItmes(menu)
            } else {
                displayMenuItmes(menuCategory)
            }
        })
    });
}
// menuDisplay Items
function displayMenuItmes(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="item">
        <img src=${item.img} alt= ${item.title}>
        <div class="item_info">
            <header>
                <h4 class="item_name"> ${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item_text">${item.desc}</p>
        </div>
        </article>`
    }).join("")

    menuContainer.innerHTML = displayMenu;
}