//scroll up



document.getElementById("upp").addEventListener ("click", scrollup);
function scrollup(){
    var currenscroll = document.documentElement.scrollTop;
if (currenscroll > 0){
    window.requestAnimationFrame(scrollup);
    window.scrollTo(0,currenscroll- (currenscroll /10));
}
}

var myCarouselEl = document.getElementById('myCarousel')
var carousel = bootstrap.Carousel.getInstance(myCarouselEl) // Retrieve a Carousel instance

myCarouselEl.addEventListener('slid.bs.carousel', function (event) {
  carousel.to('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

carousel.to('1') // Will start sliding to the slide 1 and returns to the caller
carousel.to('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
