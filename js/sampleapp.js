'use strict';
// ron rebuilding lab 07 for class
// this is tied to test.html

console.log('proof of life');
// ron begins by figuring out all the elements and stuff he might need before coding begins. lists all elements via comments.
// he deletes comments as he builds the stuff he outlined at the start

// array to show store hours
CookieShop.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// array to store all new cookie shops
CookieShop.allStores = [];
// ^^ you can create vars by attaching them to constructors
// makes it easier to track multiple vars that are tied to stuff

// use document.getElement to store the table id so we can access html dom from js page
CookieShop.tableDataEl = document.getElementById('tableData');

// need a counter to tally the allstores total
CookieShop.allStoresTotal = 0;

// need constructor to create new instances of cookie shops
function CookieShop(minCust, maxCust, avgCookie, locName) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.locName = locName;
  this.hourlyCookiesTotal = [];
  this.dailyCookies = 0;
  CookieShop.allStores.push(this);
  // need to generate cookies upon instantiation
  this.generateHourlyCookies();
  // generate shop row upon instantiation
  this.renderShopRow();
}

// randomizer function
var randomCustomer = function(min, max) {
  return Math.ceil(Math.random() * ((max - min) + 1) + min);
};

// generate hourly cookies function
// ron doing this in a way that we shouldnt be doing
// counts cookies and adds them to 3 diff plaes
CookieShop.prototype.generateHourlyCookies = function() {
  for ( var i = 0; i < CookieShop.hours.length; i++) {
    var cookie = Math.ceil(this.avgCookie * randomCustomer(this.minCust, this.maxCust));
    this.hourlyCookiesTotal.push(cookie);
    this.dailyCookies += cookie;
    CookieShop.allStoresTotal += cookie;
  }
};

// function to render header row
var renderHeaderRow = function () {
  //create elements
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  //give elements content
  thEl.textContent = 'Location';
  //append el to dom
  trEl.appendChild(thEl);

  for (var i = 0; i < CookieShop.hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = CookieShop.hours[i];
    trEl.appendChild(tdEl);
  }
  var tdElem = document.createElement('td');
  tdElem.textContent = 'Total';
  trEl.appendChild(tdElem);
  CookieShop.tableDataEl.appendChild(trEl);
};

renderHeaderRow();

// function to render shop rows
CookieShop.prototype.renderShopRow = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.locName;
  trEl.appendChild(thEl);

  for (var i = 0; i < this.hourlyCookiesTotal.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookiesTotal[i];
    trEl.appendChild(tdEl);
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = this.dailyCookies;
  trEl.appendChild(tdElem);
  CookieShop.tableDataEl.appendChild(trEl);
};

// function to render footer with totals
var renderFooterRow = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals: ';
  trEl.appendChild(tdEl);

  // iterate over hours, horizontal array
  for(var i = 0; i < CookieShop.hours.length; i++) {
    var storesHourlyTotals = 0;
    var td = document.createElement('td');

    // iterate over all stores, vertical array
    for (var j = 0; j < CookieShop.allStores.length; j++) {
      storesHourlyTotals += CookieShop.allStores[j].hourlyCookiesTotal[i];
    }
    td.textContent = storesHourlyTotals;
    trEl.appendChild(td);
  }
  var tdElem = document.createElement('td');
  tdElem.textContent = CookieShop.allStoresTotal;
  trEl.appendChild(tdElem);
  CookieShop.tableDataEl.appendChild(trEl);
};

new CookieShop(23, 34, 3.3, 'seattle');
new CookieShop(23, 34, 3.3, 'portland');
new CookieShop(23, 34, 3.3, 'france');
new CookieShop(23, 34, 3.3, 'jersey');

renderFooterRow();
