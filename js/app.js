'use strict';

console.log('proof of life');

// code to create random numbers
function randomNumber(min, max, avgCookies) {
  return Math.floor((Math.random() * (max - min)) + min) * avgCookies;
}

// Array for hours of the day
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Seattle Store Object
var seattleShop = {
  minCustomerEachHour: 23,
  maxCustomerEachHour: 65,
  avgCookiesPerCustomer: 6.3,
  customerEachHour: [],
  cookiesEachHour: [],
  totalCookiesForDay: 0,
  // function to list all hours shop is open
  render: function() {
    for (var i = 0; i < hours.length; i++){
      // create element
      var liEL = document.createElement('li');
      // give element content with ex values
      liEL.textContent = `${hours[i]} Cookies: ${randomNumber(1,5,5)}`;
      // append to DOM
      // eslint-disable-next-line no-undef
      seaShopId.appendChild(liEL);
    }
  }
};
seattleShop.render();

// Tokyo Store Object
var tokyoShop = {
  minCustomerEachHour: 3,
  maxCustomerEachHour: 24,
  avgCookiesPerCustomer: 1.2,
  customerEachHour: [],
  cookiesEachHour: [],
  totalCookiesForDay: 0,

  render: function() {
    for (var i = 0; i < hours.length; i++){
      var liEL = document.createElement('li');
      liEL.textContent = `${hours[i]} Cookies: ${randomNumber(1,7,3)}`;
      // eslint-disable-next-line no-undef
      tokyoShopId.appendChild(liEL);
    }
  }
};
tokyoShop.render();

// Dubai Store Object
var dubaiShop = {
  minCustomerEachHour: 11,
  maxCustomerEachHour: 24,
  avgCookiesPerCustomer: 3.7,
  customerEachHour: [],
  cookiesEachHour: [],
  totalCookiesForDay: 0,

  render: function() {
    for (var i = 0; i < hours.length; i++){
      var liEL = document.createElement('li');
      liEL.textContent = `${hours[i]} Cookies: ${randomNumber(1,6,2)}`;
      // eslint-disable-next-line no-undef
      dubaiShopId.appendChild(liEL);
    }
  }
};
dubaiShop.render();

// Paris Store Object
var parisShop = {
  minCustomerEachHour: 20,
  maxCustomerEachHour: 38,
  avgCookiesPerCustomer: 2.3,
  customerEachHour: [],
  cookiesEachHour: [],
  totalCookiesForDay: 0,

  render: function() {
    for (var i = 0; i < hours.length; i++){
      var liEL = document.createElement('li');
      liEL.textContent = `${hours[i]} Cookies: ${randomNumber(1,8,4)}`;
      // eslint-disable-next-line no-undef
      parisShopId.appendChild(liEL);
    }
  }
};
parisShop.render();

// Lima Store Object
var limaShop = {
  minCustomerEachHour: 2,
  maxCustomerEachHour: 16,
  avgCookiesPerCustomer: 4.6,
  customerEachHour: [],
  cookiesEachHour: [],
  totalCookiesForDay: 0,

  render: function() {
    for (var i = 0; i < hours.length; i++){
      var liEL = document.createElement('li');
      liEL.textContent = `${hours[i]} Cookies: ${randomNumber(1,9,3)}`;
      // eslint-disable-next-line no-undef
      limaShopId.appendChild(liEL);
    }
  }
};
limaShop.render();
