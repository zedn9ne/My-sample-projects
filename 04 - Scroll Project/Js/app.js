//  variables /////////////////
const navTogglebtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const date = document.getElementById('date');
const links = document.querySelector('.links');
const navBar = document.querySelector('.nav-bar');
const topLink = document.querySelector('.top-link');
const scrollLinks = document.querySelectorAll('.scroll-link');


// set Date /////////////////////
date.innerHTML = new Date().getFullYear();

// list Container //////////////
navTogglebtn.addEventListener('click', function () {
    linksContainer.classList.toggle('links-container-active')
    navTogglebtn.classList.toggle('nav-toggle-active');



    // const containerHeight = linksContainer.getBoundingClientRect().height;
    // const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight);
    // if (containerHeight === 0 ) {
    //     linksContainer.style.height = `${linksHeight}px`;
    // } else {
    //     linksContainer.style.height = 0;
    // }

})  

window.addEventListener('scroll', function () {
    
    if (window.pageYOffset > 100) {
        navBar.classList.add('fixed-nav')
    } else {
        navBar.classList.remove('fixed-nav')
    }

    if (window.pageYOffset > 900) {
        topLink.classList.add('top-link-active')
    } else {
        topLink.classList.remove('top-link-active')
    }
    // console.log(window.pageYOffset);
})

scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        // prevent default
        e.preventDefault();
        // navigate to specific spot 
        const id = e.currentTarget.getAttribute('href').slice(1);  // slice starts extracting an index from first (from start)
        const element = document.getElementById(id);
        // calculate height
        const navHeight = navBar.getBoundingClientRect().height;
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;
        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 90) {
            position = position + linksContainerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        navTogglebtn.classList.toggle('nav-toggle-active');
        linksContainer.classList.toggle('links-container-active')
    });
});