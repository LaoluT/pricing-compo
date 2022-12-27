const month = document.querySelectorAll('.monthly');
const anual = document.querySelectorAll('.annually');
const toggle = document.querySelector('#switch');

toggle.addEventListener('change', function(){

if(this.checked) {
    month[0].textContent = 199.99;
    month[1].textContent = 249.99;
    month[2].textContent = 399.99;
  } else {
    month[0].textContent = 19.99;
    month[1].textContent = 24.99;
    month[2].textContent = 39.99;
    }
  
}) 