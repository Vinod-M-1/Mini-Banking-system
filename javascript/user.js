let acu = localStorage.getItem('activeuser-name')
let bal = localStorage.getItem('activeuser-balance')
let acn = localStorage.getItem('activeuser-accnum')
let greet = document.getElementById('greeting')
greet.innerHTML =
  "Hello, " + acu + "!" + "<br>" +
  "Your current account number : " + acn + "<br>" +
  "Your balance : " + bal;
