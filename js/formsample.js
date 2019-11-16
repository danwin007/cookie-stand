'use strict';

console.log('proof of life forms');

// targeting html id 'userform', gives us this HTML element as a targetable variable
var userForm = document.getElementById('user-form');

userForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // below method will stop the thing from reloading page after submit
  // early versions of js would reload entire page after button submit
  event.preventDefault();
  var name = event.target.inputElementName.value;
  var age = event.target.inputElementAge.value;
  // this log shows us lots of deets about the event and target
  console.log('event.target.inputElementName.value: ', event.target.inputElementName.value);

  alert(`Hello ${name} you are ${age} years old`);

  // these lines below clear the fields after value is submitted
  event.target.inputElementName.value = null;
  event.target.inputElementAge.value = null;


  // with the var name line, the below log lets us do the same as the above log but in a simpler way
  console.log('name: ', name);
  console.log('age: ', age);
}

