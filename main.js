let burger_menu = document.querySelector('.burger_menu'),
Mobile_menu__level1=document.querySelector('.Mobile_menu__level1'),
Mobile_menu__level2=document.querySelector('.Mobile_menu__level2'),
bm = document.querySelector('#bm'),
b=document.querySelector('#b'),
pod_of =document.querySelector('.pod_of'),
mb2=document.querySelector('#mb2'),
bm2=document.querySelector('#bm2');

burger_menu.addEventListener('click', function(){
    Mobile_menu__level1.classList.add('active')
});
bm.addEventListener('click', function(){
    Mobile_menu__level1.classList.remove('active')
});
b.addEventListener('click', function(){
    pod_of.classList.toggle('pod_on')
});
mb2.addEventListener('click', function(){
    Mobile_menu__level2.classList.add('active2')
});
bm2.addEventListener('click', function(){
    Mobile_menu__level2.classList.remove('active2')
});