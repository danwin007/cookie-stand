'use strict';

console.log('proof of life FORMS');

// ID list

// FORM ID
// user-form

// STORE LOCATION
// inputElementStoreLoc

// MIN CUSTOMER VALUE
// inputElementMinCust

// MAX CUSTOMER VALUE
// inputElementMaxCust

// AVG COOKERS PER CUSTOMER
// inputElementAvgCookiesPerCust
// inputElementAvgCookiesPerCust

// create var that allows us to target form element
var userForm = document.getElementById('user-form');

// create event listener for FORM SUBMIT
userForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  var storeLoc = e.target.inputElementStoreLoc.value;
  var minCust = e.target.inputElementMinCust.value;
  var maxCust = e.target.inputElementMaxCust.value;
  var avgCookies = e.target.inputElementAvgCookiesPerCust;

  console.log('storeLoc: ', storeLoc);
  console.log('minCust: ', minCust);
  console.log('maxCust: ', maxCust);
  console.log('avgCookies: ', avgCookies);

  // clear fields
  e.target.inputElementStoreLoc.value = null;
  e.target.inputElementMinCust.value = null;
  e.target.inputElementMaxCust.value = null;
  e.target.inputElementAvgCookiesPerCust.value = null;
}
