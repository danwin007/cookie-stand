'use strict';

console.log('proof of life');

// Random Number Function
function randomNumber(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

// Hours Array
var hoursArray = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

// // Row Names Array
// var rowNames = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

// Store Array
var allStores = [];

// Store Constructor Function
function StoreConstructor(storeBranch, minCustomerEachHour, maxCustomerEachHour, avgCookiesPerCustomer){
  this.storeBranch = storeBranch;
  this.minCustomerEachHour = minCustomerEachHour;
  this.maxCustomerEachHour = maxCustomerEachHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customerEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookiesForDay = 0;

  allStores.push(this);
}

// stores to pass into constructor
new StoreConstructor('Seattle Cookie',23,65,6.3);
new StoreConstructor('Tokyo Branch',3,24,1.2);
new StoreConstructor('Dubai Branch',11,38,3.7);
new StoreConstructor('Paris Branch',20,38,2.3);
new StoreConstructor('Lima Branch',2,16,4.6);

// Store Prototypes
// need 3, 1 to render, 1 to calc cookies, 1 to calc customers
StoreConstructor.prototype.calcCustomers = function() {
  for (var i = 0; i < hoursArray.length; i++){
    var customers = randomNumber(this.minCustomerEachHour, this.maxCustomerEachHour);
    this.customerEachHour.push(customers);
  }
};

StoreConstructor.prototype.calcCookies = function() {
  for (var i = 0; i <hoursArray.length; i++){
    var cookies = Math.ceil(this.customerEachHour[i] * this.avgCookiesPerCustomer);
    this.cookiesEachHour.push(cookies);
  }
};

StoreConstructor.prototype.render = function() {
  this.calcCustomers();
  this.calcCookies();
};

// Vars for Table-Making
var table = document.getElementById('cookieTable');
var tbodyEl = document.createElement('tbody');
var thEl = document.createElement('th');
var tdEl = document.createElement('td');
var trEl = document.createElement('tr');

// Function to Build Header
function tableHeader() {
  thEl = document.createElement('th');
  trEl = document.createElement('tr');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  table.appendChild(thEl);

  for(var i = 0; i < hoursArray.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hoursArray[i];
    table.appendChild(thEl);
  }
}

// Prototype to Populate Rows with Store Content
StoreConstructor.prototype.rows() {
  for (var i = 0; i < hoursArray.length) {
    
  }
}

// function to populate arrays
function doStuff() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
  console.log(allStores);
}

// calling functions
doStuff();
tableHeader();
