const menu = dcoument.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const mobileMenu= () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}


menu.addEventListener('click', mobileMenu);