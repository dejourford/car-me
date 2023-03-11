const mobileNav = document.querySelector('.mobile-nav')


showMenu = () => {
    mobileNav.classList.add('active')
}

closeMenu = () => {
    mobileNav.classList.remove('active')
}

// SCROLL BUTTON
const scrollUpBtn = document.querySelector('#scroll-up-arrow').addEventListener('click', () => {
    window.scrollTo(0, 0);
})
window.addEventListener('scroll', () => {
    const scrollUpArrow = document.getElementById('scroll-up-arrow');
  
    if (window.scrollY > 500) {
      scrollUpArrow.classList.remove('hidden');
    } else {
      scrollUpArrow.classList.add('hidden');
    }
  });