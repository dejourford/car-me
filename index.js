const mobileNav = document.querySelector('.mobile-nav')
const hamburger = document.querySelector('.fa-bars')

showMenu = () => {
    mobileNav.classList.add('active')
}

closeMenu = () => {
    mobileNav.classList.remove('active')
}