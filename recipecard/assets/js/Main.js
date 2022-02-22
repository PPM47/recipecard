const toggle_ = document.querySelector('.toggle_')

const togglem = document.querySelector('.toggle-')
const Menu_con = document.querySelector('.Menu-con')




document.getElementById('search_btn').onclick = function() {
    document.getElementById('search_input').focus();
};



/* ----------------- toogle menu--------------- */
toggle_.addEventListener('click', () => {
  toggle_.classList.toggle('active')

  Menu_con.classList.toggle('active')
  

})
togglem.addEventListener('click', () => {
  togglem.classList.toggle('active')

  Menu_con.classList.toggle('active')
  

})

// external js: flickity.pkgd.js

var carousel = document.querySelector('.carousel');
var flkty = new Flickity( carousel, {
  imagesLoaded: true,
  percentPosition: false,
});

var imgs = carousel.querySelectorAll('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

flkty.on( 'scroll', function() {
  flkty.slides.forEach( function( slide, i ) {
    var img = imgs[i];
    var x = ( slide.target + flkty.x ) * -1/3;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});
 
