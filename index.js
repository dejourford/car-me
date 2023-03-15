
// HAMBURGER MENU
const mobileNav = document.querySelector('.mobile-nav')


showMenu = () => {
    mobileNav.classList.add('show')
}

closeMenu = () => {
    mobileNav.classList.remove('show')
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



// accordion js
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}