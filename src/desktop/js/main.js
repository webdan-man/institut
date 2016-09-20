function init_buttons(selector) {
    $(selector).each(function() {
        var text = $(this).text()
        $(this).html('');
        $('<span class="original">' + text + '</span><span class="clone">' + text + '</span>').appendTo(this);

    });
}

function open_popup(elem) {
    var event = $(elem).attr('data-event');
    var frmid = $(elem).attr('data-frmid');
    console.log('data=', event, frmid);
    $('#pop_form form input[name="event"]').val(event);
    $('#pop_form form input[name="frmid"]').val(frmid);
    $('#pop_form').arcticmodal();
}


function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

function run_geo(geo_url) {
    $.ajax({
        type: 'GET',
        url: geo_url,
        dataType: 'xml',
        success: function(xml) {
            $(xml).find('ip').each(function() {
                var city = $(this).find('city').text();
                var region = $(this).find('region').text();
                if (city != region) {
                    var ipg = city + ', ' + region;
                } else {
                    var ipg = city;
                }
                $('<input type="hidden" />').attr({
                    name: 'location',
                    class: 'location',
                    value: ipg
                }).appendTo("form");
            });
        }
    });
}

function submit_track_event(event) {
    if (yaCounter) {
        yaCounter.reachGoal(event);
    }
    if (ga) {
        ga('send', 'event', 'submit', event);
    }
}

function init_bg_video() {
    if (!isMobile) {
        $('<video poster="img/bg_sec1.jpg)" id="bgvid" playsinline autoplay muted loop><source src="js/video.mp4" type="video/mp4"></video>').appendTo('.sec1');
    }
}
init_bg_video();

$(document).ready(function() {
    init_buttons('.btn,.a-btn,.button');


    $('.btn,.btn-link').click(function(e) {
        e.preventDefault();
        open_popup(this);
    });

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


    slider2 = $('.slider_usl_gr.desc .slider_usl').bxSlider({
        infiniteLoop: true,
        nextSelector: '#sld2r',
        prevSelector: '#sld2l',
        controls: true,
        pager: true,
        pagerCustom: '.slider_usl_gr.desc .pager_usl',
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 310,
        slideMargin: 20,
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

    $('#sld2r').click(function(e) {
        e.preventDefault();
        slider2.goToNextSlide();
    });

    $('#sld2l').click(function(e) {
        e.preventDefault();
        slider2.goToPrevSlide();
    });

    slider3 = $('.slid_lic_m .slid_lic').bxSlider({
        infiniteLoop: true,
        nextSelector: '.slid_lic_m .str_r',
        prevSelector: '.slid_lic_m .str_l',
        controls: true,
        pager: false,
        auto: false,
        speed: 500,
        slideWidth: 228,
        slideMargin: 20,
        minSlides: 1,
        maxSlides: 4,
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

    $('.slid_lic_m .str_r').click(function(e) {
        e.preventDefault();
        slider3.goToNextSlide();
    });

    $('.slid_lic_m .str_l').click(function(e) {
        e.preventDefault();
        slider3.goToPrevSlide();
    });

    $('.fancy').not('.bx-clone').fancybox({
        helpers: {
            overlay: {
                locked: false
            },
            title: null
        }
    });

    $('.video a').click(function(e) {
        e.preventDefault();

        $(this).closest('.video').html('').append('<iframe src="https://www.youtube.com/embed/lpNM5tJ-WO0?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>');
    });

    $.get("http://ipinfo.io", function(response) {
        geo_url = 'http://ipgeobase.ru:7020/geo?ip=' + response.ip;
        run_geo(geo_url);
    }, "jsonp");
    utm = [];
    $.each(["utm_source", "utm_medium", "utm_campaign", "utm_term", 'source_type', 'source', 'position_type', 'position', 'added', 'creative', 'matchtype'], function(i, v) {
        $('<input type="hidden" />').attr({
            name: v,
            class: v,
            value: function() {
                if (getURLParameter(v) == undefined) return '-';
                else return getURLParameter(v)
            }
        }).appendTo("form")
    });
    $('<input type="hidden" />').attr({
        name: 'url',
        value: document.location.href
    }).appendTo("form");
    $('<input type="hidden" />').attr({
        name: 'title',
        value: document.title
    }).appendTo("form");


    $('input[name="name"]').blur(function() {
        if ($(this).val().length < 2) {
            $(this).addClass('error-input');
        }
    });
    $('input[name="name"]').focus(function() {
        $(this).removeClass('error-input');
    });


    $('input[name="phone"]').mask('+7 (999) 999-99-99');
    $('input[name="phone"]').blur(function() {
        if ($(this).val().length != 18) {
            $(this).addClass('error-input');
        }
    });
    $('input[name="phone"]').focus(function() {
        $(this).removeClass('error-input');
    });

    $('form').submit(function(e) {
        e.preventDefault();
        $(this).find('input[type="text"]').trigger('blur');
        if (!$(this).find('input[type="text"]').hasClass('error-input')) {
            var type = $(this).attr('method');
            var url = $(this).attr('action');
            var data = $(this).serialize();
            var track_event = $(this).find('input[name="event"]').val();
            $.ajax({
                type: type,
                url: url,
                data: data,
                success: function() {
                    $.arcticmodal('close');
                    $('#okgo').arcticmodal();
                    submit_track_event(track_event);
                }
            });
        }
    });

    $('form .button').click(function(e) {
        e.preventDefault();
        $(this).closest('form').submit();
    });


});
