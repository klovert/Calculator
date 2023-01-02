let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');

document.getElementById('toggle').addEventListener("click", function(){
document.getElementsByTagName('body')[0].classList.toggle("dark");});

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (this.innerHTML == "=") {
      value.innerHTML = eval(value.innerHTML);
    } else {
      if (this.innerHTML == "Borrar") {
        value.innerHTML = "";
      } else {
        value.innerHTML += this.innerHTML;
      }
    }
  })
};