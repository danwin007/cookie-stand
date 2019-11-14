'use strict';

console.log('proof of life');

// code to create random numbers (not the only way)
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
  // loop adds all hours + totals random values
  render: function() {
    for (var i = 0; i < hours.length; i++){
      // create element
      var liEL = document.createElement('li');
      // calc total cookies by adding random numbers up
      var rndNumberTotal = randomNumber(1,5,5);
      this.totalCookiesForDay += rndNumberTotal;
      // give element content with x values
      liEL.textContent = `${hours[i]} Cookies: ${rndNumberTotal}`;
      // append to DOM
      // eslint-disable-next-line no-undef
      seaShopId.appendChild(liEL);
    }
  },
  // // code to select total cookies per day
  totalLi: function() {
    var newLi = document.createElement('li');
    newLi.textContent = `Total: ${this.totalCookiesForDay}`;
    // eslint-disable-next-line no-undef
    seaShopId.appendChild(newLi);
  }
};
seattleShop.render();
seattleShop.totalLi();

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
      var rndNumberTotal = randomNumber(1,7,3);
      this.totalCookiesForDay += rndNumberTotal;
      liEL.textContent = `${hours[i]} Cookies: ${rndNumberTotal}`;
      // eslint-disable-next-line no-undef
      tokyoShopId.appendChild(liEL);
    }
  },
  // code to add total Li
  totalLi: function() {
    var newLi = document.createElement('li');
    newLi.textContent = `Total: ${this.totalCookiesForDay}`;
    // eslint-disable-next-line no-undef
    tokyoShopId.appendChild(newLi);
  }
};
tokyoShop.render();
tokyoShop.totalLi();

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
      var rndNumberTotal = randomNumber(1,6,2);
      this.totalCookiesForDay += rndNumberTotal;
      liEL.textContent = `${hours[i]} Cookies: ${rndNumberTotal}`;
      // eslint-disable-next-line no-undef
      dubaiShopId.appendChild(liEL);
    }
  },
  // code to add total Li
  totalLi: function() {
    var newLi = document.createElement('li');
    newLi.textContent = `Total: ${this.totalCookiesForDay}`;
    // eslint-disable-next-line no-undef
    dubaiShopId.appendChild(newLi);
  }
};
dubaiShop.render();
dubaiShop.totalLi();

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
      var rndNumberTotal = randomNumber (1,8,4);
      this.totalCookiesForDay += rndNumberTotal;
      liEL.textContent = `${hours[i]} Cookies: ${rndNumberTotal}`;
      // eslint-disable-next-line no-undef
      parisShopId.appendChild(liEL);
    }
  },
  // code to append total Li
  totalLi: function() {
    var newLi = document.createElement('li');
    newLi.textContent = `Total: ${this.totalCookiesForDay}`;
    // eslint-disable-next-line no-undef
    parisShopId.appendChild(newLi);
  }
};
parisShop.render();
parisShop.totalLi();

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
      var rndNumberTotal = randomNumber(1,9,3);
      this.totalCookiesForDay += rndNumberTotal;
      liEL.textContent = `${hours[i]} Cookies: ${rndNumberTotal}`;
      // eslint-disable-next-line no-undef
      limaShopId.appendChild(liEL);
    }
  },
  // code to add total li
  totalLi: function() {
    var newLi = document.createElement('li');
    newLi.textContent = `Total: ${this.totalCookiesForDay}`;
    // eslint-disable-next-line no-undef
    limaShopId.appendChild(newLi);
  }
};
limaShop.render();
limaShop.totalLi();
