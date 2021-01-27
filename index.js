let burger = document.querySelector('.burger');
let parent = document.querySelector('.parent');
burger.onclick = function(){
  parent.classList.toggle('menu_show');
}