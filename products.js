const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);
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
