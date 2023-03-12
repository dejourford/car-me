// HAMBURGER MENU
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


// FAQ DROPDOWN BOX
const questionOne = document.querySelector('.faq-1')
const questionTwo = document.querySelector('.faq-2')
const questionThree = document.querySelector('.faq-3')
const answerOne = document.querySelector('#answer-1')
const answerTwo = document.querySelector('#answer-2')
const answerThree = document.querySelector('#answer-3')

showAnswer = () => {
  // answerOne.classList.toggle('answer')
  answerOne.classList.toggle('active')
}