let menu_bar = document.querySelector('.menu-bars');
var nav_items = document.querySelector('.nav-items');

document.addEventListener('click',()=>
{
    menu_bar.classList.toggle('active');
    nav_items.classList.toggle('active');
},false);