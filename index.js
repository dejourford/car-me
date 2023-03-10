const mobileNav = document.querySelector('.mobile-nav')


showMenu = () => {
    mobileNav.classList.add('active')
}

closeMenu = () => {
    mobileNav.classList.remove('active')
}