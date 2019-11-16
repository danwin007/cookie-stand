'use strict';

console.log('proof of life');

// Random Number Function
function randomNumber(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

// Hours Array
var hoursArray = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

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
new StoreConstructor('Seattle',23,65,6.3);
new StoreConstructor('Tokyo',3,24,1.2);
new StoreConstructor('Dubai',11,38,3.7);
new StoreConstructor('Paris',20,38,2.3);
new StoreConstructor('Lima',2,16,4.6);

// Store Prototypes
// need 3, 1 to render, 1 to calc cookies, 1 to calc customers

// CUSTOMER PER HOUR PROTOTYPE
StoreConstructor.prototype.calcCustomers = function() {
  for (var i = 0; i < hoursArray.length; i++){
    var customers = randomNumber(this.minCustomerEachHour, this.maxCustomerEachHour);
    this.customerEachHour.push(customers);
  }
};

// COOKIE PER HOUR PROTOTYPE
StoreConstructor.prototype.calcCookies = function() {
  for (var i = 0; i <hoursArray.length; i++){
    var cookies = Math.ceil(this.customerEachHour[i] * this.avgCookiesPerCustomer);
    this.cookiesEachHour.push(cookies);
  }
};

// RENDER PROTOTYPE
StoreConstructor.prototype.render = function() {
  this.calcCustomers();
  this.calcCookies();
  this.rows();
  this.hoursTotal();
};

// I figured this one out on the second try! I feel pretty buff!
// Store Prototype for calculating Total Cookies (per store) for entire day
StoreConstructor.prototype.hoursTotal = function() {
  // do math to add up all hours to create total figure, put that in total cookie variable
  for (var i = 0; i < hoursArray.length; i++) {
    var cookieUp = this.cookiesEachHour[i];
    this.totalCookiesForDay += cookieUp;
  }
  // create cell to hold total cookie data
  var tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesForDay;
  trEl.appendChild(tdEl);
  table.appendChild(trEl);
};

// Vars for Table-Making
var table = document.getElementById('cookieTable');
var thEl = document.createElement('th');
var tdEl = document.createElement('td');
var trEl = document.createElement('tr');

// Function to Build Total Cookies Header Cell
function totalHeader() {
  thEl = document.createElement('th');
  trEl = document.createElement('tr');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  table.appendChild(thEl);
}

// Function to build Total Cookies Footer Row
// KEEP WORKING ON THIS ONE
// function totalRow(){
//   for (var i = 0; i < hoursArray.length; i++){

//   }
//   thEl = document.createElement('th');
//   trEh = document.createElement('tr');
//   thEl.textContent = 'Totals';
//   trEl.appendChild();
// }

// Function to Build Header with Hours
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
StoreConstructor.prototype.rows = function() {
  //make first header cell
  thEl = document.createElement('th');
  trEl = document.createElement('tr');
  thEl.textContent = this.storeBranch;
  trEl.appendChild(thEl);
  //populate data rows
  for (var i = 0; i < hoursArray.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }
  table.appendChild(trEl);
};

// function to populate arrays
function doStuff() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
  console.log(allStores);
}


// calling functions
tableHeader();
totalHeader();
doStuff();

// still need FOOTER
