
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {   

    menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');

}
window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active'); 
}
$('.product-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  items:3,
  autoplay:true
});









































