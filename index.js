
// HAMBURGER MENU
const mobileNav = document.querySelector('.mobile-nav')


showMenu = () => {
    mobileNav.classList.add('show')
}

closeMenu = () => {
    mobileNav.classList.remove('show')
}

// Scroll back to top
// Get the button:
let mybutton = document.getElementById("scroll-up-arrow");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


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

// DYNAMIC CAR DISPLAY
const model = document.querySelector('#model')
const make = document.querySelector('#make')
const doors = document.querySelector('#doors')
const transmission = document.querySelector('#transmission')
const fuel = document.querySelector('#fuel')

// array of cars
const cars = {
  'Honda Odyssey': {
    'make': 'Honda',
    'model': 'Odyssey',
    'doors': '4 Doors',
    'transmission': 'Automatic',
    'fuel': 'Gasoline'
  },

  'Mercedes G-Wagon': {
    'make': 'Mercedes',
    'model': 'G-Wagon',
    'doors': '4 Doors',
    'transmission': 'Automatic',
    'fuel': 'Diesel'
  },

  'Kia Sportage': {
    'make': 'Kia',
    'model': 'Sportage',
    'doors': '4 Doors',
    'transmission': 'Automatic',
    'fuel': 'Gasoline'
  },

  'Lexus RX-350': {
    'make': 'Lexus',
    'model': 'RX-350',
    'doors': '4 Doors',
    'transmission': 'Automatic',
    'fuel': 'Gasoline'
  },

  'Porsche 311 ': {
    'make': 'Porsche',
    'model': '311',
    'doors': '2 Doors',
    'transmission': 'Manual',
    'fuel': 'Diesel'
  },

  'Toyota Camry': {
    'make': 'Toyota',
    'model': 'Camry',
    'doors': '4 Doors',
    'transmission': 'Automatic',
    'fuel': 'Gasoline'
  }


}

console.log(cars)