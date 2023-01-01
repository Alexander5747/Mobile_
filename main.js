let burger_menu = document.querySelector('.burger_menu'),
Mobile_menu__level1=document.querySelector('.Mobile_menu__level1')
let bm = document.querySelector('#bm');
burger_menu.addEventListener('click', function(){
    Mobile_menu__level1.classList.add('active')
});
bm.addEventListener('click', function(){
    Mobile_menu__level1.classList.remove('active')
});


