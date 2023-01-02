let top_menu  = document.querySelector('.top_menu'),
burger_menu = document.querySelector('.burger_menu'),
Mobile_menu__level1=document.querySelector('.Mobile_menu__level1'),
Mobile_menu__level2=document.querySelector('.Mobile_menu__level2'),
bm = document.querySelector('#bm'),
b=document.querySelector('#b'),
pod_of =document.querySelector('.pod_of'),
mb2=document.querySelector('#mb2'),
bm2=document.querySelector('#bm2');

burger_menu.addEventListener('click', function(){
    Mobile_menu__level1.classList.add('active')
    top_menu.classList.add('none')
});
bm.addEventListener('click', function(){
    Mobile_menu__level1.classList.remove('active')
    top_menu.classList.remove('none')
});
b.addEventListener('click', function(){
    pod_of.classList.toggle('pod_on')
});
mb2.addEventListener('click', function(){
    Mobile_menu__level2.classList.add('active2')
    Mobile_menu__level1.classList.remove('active')
});
bm2.addEventListener('click', function(){
    Mobile_menu__level2.classList.remove('active2')
    Mobile_menu__level1.classList.add('active')
});