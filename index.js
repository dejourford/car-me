
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
const rate = document.querySelector('#rate')
const image = document.querySelector('#car')

// array of cars
const cars = {
  'Honda_Odyssey': {
    'make': 'Honda',
    'model': 'Odyssey',
    'doors': '4 Doors',
    'transmission': 'Automatic',
    'fuel': 'Gasoline',
    'rate': '$30 / per day',
    'img': 'images/honda-odyssey.png'
  },

  'Mercedes_GWagon': {
    'make': 'Mercedes',
    'model': 'G-Wagon',
    'doors': '4 Doors',
    'transmission': 'Automatic',
    'fuel': 'Diesel',
    'rate': '$100 / per day',
    'img': 'images/g-wagon.png',
  },

  'Kia_Sportage': {
    'make': 'Kia',
    'model': 'Sportage',
    'doors': '4 Doors',
    'transmission': 'Automatic',
    'fuel': 'Gasoline',
    'rate': '$40 / per day',
    'img': 'images/kia-sportage.png',
  },

  'Lexus_RX350': {
    'make': 'Lexus',
    'model': 'RX-350',
    'doors': '4 Doors',
    'transmission': 'Automatic',
    'fuel': 'Gasoline',
    'rate': '$45 / per day',
    'img': 'images/lexus-rx-350.png',
  },

  'Porsche_311': {
    'make': 'Porsche',
    'model': '311',
    'doors': '2 Doors',
    'transmission': 'Automatic',
    'fuel': 'Diesel',
    'rate': '$70 / per day',
    'img': 'images/porsche-311.png',
  },

  'Toyota_Camry': {
    'make': 'Toyota',
    'model': 'Camry',
    'doors': '4 Doors',
    'transmission': 'Automatic',
    'fuel': 'Gasoline',
    'rate': '$40 / per day',
    'img': 'images/toyota-camry.png',
  }


}
  make.textContent = cars.Honda_Odyssey.make
  model.textContent = cars.Honda_Odyssey.model
  doors.textContent = cars.Honda_Odyssey.doors
  transmission.textContent = cars.Honda_Odyssey.transmission
  fuel.textContent = cars.Honda_Odyssey.fuel
  rate.textContent = cars.Honda_Odyssey.rate
  image.src = cars.Honda_Odyssey.img


const hondaOdyssey = document.querySelector('#hondaOdyssey').addEventListener('click', () => {
  make.textContent = cars.Honda_Odyssey.make
  model.textContent = cars.Honda_Odyssey.model
  doors.textContent = cars.Honda_Odyssey.doors
  transmission.textContent = cars.Honda_Odyssey.transmission
  fuel.textContent = cars.Honda_Odyssey.fuel
  rate.textContent = cars.Honda_Odyssey.rate
  image.src = cars.Honda_Odyssey.img
})

const mercedesGWagon = document.querySelector('#gWagon').addEventListener('click', () => {
  make.textContent = cars.Mercedes_GWagon.make
  model.textContent = cars.Mercedes_GWagon.model
  doors.textContent = cars.Mercedes_GWagon.doors
  transmission.textContent = cars.Mercedes_GWagon.transmission
  fuel.textContent = cars.Mercedes_GWagon.fuel
  rate.textContent = cars.Mercedes_GWagon.rate
  image.src = cars.Mercedes_GWagon.img
})

const kiaSportage = document.querySelector('#kiaSportage').addEventListener('click', () => {
  make.textContent = cars.Kia_Sportage.make
  model.textContent = cars.Kia_Sportage.model
  doors.textContent = cars.Kia_Sportage.doors
  transmission.textContent = cars.Kia_Sportage.transmission
  fuel.textContent = cars.Kia_Sportage.fuel
  rate.textContent = cars.Kia_Sportage.rate
  image.src = cars.Kia_Sportage.img
})

const lexusRX = document.querySelector('#lexusRX350').addEventListener('click', () => {
  make.textContent = cars.Lexus_RX350.make
  model.textContent = cars.Lexus_RX350.model
  doors.textContent = cars.Lexus_RX350.doors
  transmission.textContent = cars.Lexus_RX350.transmission
  fuel.textContent = cars.Lexus_RX350.fuel
  rate.textContent = cars.Lexus_RX350.rate
  image.src = cars.Lexus_RX350.img
})

const porsche311 = document.querySelector('#porsche311').addEventListener('click', () => {
  make.textContent = cars.Porsche_311.make
  model.textContent = cars.Porsche_311.model
  doors.textContent = cars.Porsche_311.doors
  transmission.textContent = cars.Porsche_311.transmission
  fuel.textContent = cars.Porsche_311.fuel
  rate.textContent = cars.Porsche_311.rate
  image.src = cars.Porsche_311.img
})

const toyotaCamry = document.querySelector('#toyotaCamry').addEventListener('click', () => {
  make.textContent = cars.Toyota_Camry.make
  model.textContent = cars.Toyota_Camry.model
  doors.textContent = cars.Toyota_Camry.doors
  transmission.textContent = cars.Toyota_Camry.transmission
  fuel.textContent = cars.Toyota_Camry.fuel
  rate.textContent = cars.Toyota_Camry.rate
  image.src = cars.Toyota_Camry.img
})
