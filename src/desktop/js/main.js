function init_buttons(selector) {
    $(selector).each(function() {
        var text = $(this).text()
        $(this).html('');
        $('<span class="original">' + text + '</span><span class="clone">' + text + '</span>').appendTo(this);
    });
}

$(document).ready(function() {
    init_buttons('.btn,.a-btn');

    slider1 = $('.slider_s_w').bxSlider({
        infiniteLoop: true,
        nextSelector: '#sld2r',
        prevSelector: '#sld2l',
        controls: false,
        pager: true,
        pagerCustom: '.slid_page',
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        onSlideNext: function($slideElement, oldIndex, newIndex) {
            //$('.rewievs .sliderw #wrap-sld2 .slide').addClass('fadeouted');
            //$('.rewievs .sliderw #wrap-sld2 .slide').removeClass('active');
            //$('.rewievs .sliderw #wrap-sld2 .slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
            //$('.rewievs .sliderw #wrap-sld2 .slide[data-sld="'+newIndex+'"]').addClass('active');
        },
        onSlidePrev: function($slideElement, oldIndex, newIndex) {
            //$('.rewievs .sliderw #wrap-sld2 .slide').addClass('fadeouted');
            //$('.rewievs .sliderw #wrap-sld2 .slide').removeClass('active');
            //$('.rewievs .sliderw #wrap-sld2 .slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
            //$('.rewievs .sliderw #wrap-sld2 .slide[data-sld="'+newIndex+'"]').addClass('active');
        },
        onSliderLoad: function() {
            //$('.rewievs .sliderw #wrap-sld2 .slide.active.bx-clone').removeClass('active');
            //$('.rewievs .sliderw #wrap-sld2 .slide').addClass('fadeouted');
            //$('.rewievs .sliderw #wrap-sld2 .slide.active').removeClass('fadeouted');
            //$('.rewievs').addClass('loaded-slider');
        }
    });
});
