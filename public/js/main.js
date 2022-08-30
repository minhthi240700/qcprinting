// $('.items').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     nextArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i><span class="sr-only sr-only-focusable"><</span></div>',
//     prevArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i><span class="sr-only sr-only-focusable">></span></div>',
//   });

var listMenu = document.querySelectorAll('.listitem')

function activeMenu () {
    listMenu.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}

listMenu.forEach((item) => item.addEventListener('click', activeMenu));


$(document).ready(function() {
  $('.nav__mobile').click(function() {
    $('.menu__list').slideToggle();
  })
})

var navbar = document.querySelector('.navbar')
window.onscroll = function () { myFunction() };

var screen = screen.width;
function myFunction() {
    if (document.documentElement.scrollTop > 10 && screen > 991 ) {
        document.querySelector('.navbar').classList.add('scroll');
    } else {
        document.querySelector('.navbar').classList.remove('scroll');
        
    }
    
}


$(document).ready(function() {
  $('.navmobile').click(function() {
    $('.menu').slideToggle();
  })
})