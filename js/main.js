var toggleMenu = function(){
	if (swiper.previousIndex == 0)
		swiper.slidePrev()
}
, menuButton = document.getElementsByClassName('menu-button')[0]
, swiper = new Swiper('.swiper-container', {
	slidesPerView: 'auto'
	, initialSlide: 1
	, resistanceRatio: .00000000000001
	, onSlideChangeStart: function(slider) {
		if (slider.activeIndex == 0) {
			menuButton.classList.add('cross')
			menuButton.removeEventListener('click', toggleMenu, false)
		} else
			menuButton.classList.remove('cross')
	}
	, onSlideChangeEnd: function(slider) {
		if (slider.activeIndex == 0)
			menuButton.removeEventListener('click', toggleMenu, false)
		else
			menuButton.addEventListener('click', toggleMenu, false)
	}
	, slideToClickedSlide: true
})

var checkScroll = function(evt){
    var $slide = $(this),
        scrollTop = $slide.scrollTop(); 
    if (scrollTop > 0 && (scrollTop + $slide.height()) < $slide[0].scrollHeight) {
        evt.stopPropagation();
    }
};



	$(".musicSlide").each(function(index, element){
		var $this = $(this);
		$this.addClass("row-" + index);
		var swiper = new Swiper(".row-" + index, {
			slidesPerView: "auto",
			grabCursor: true,
			simulateTouch: true,
			preventClicks: true,
			keyboardControl: true,
			paginationClickable: true,
		});
	});
$('.swiper-slide').on('touchmove', checkScroll);

var musicSlide = new Swiper('.musicSlide-container', {
    scrollbar: '.musicSlide-scrollbar',
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true
});