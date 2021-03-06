$.arcticmodal('setDefault', {
    beforeOpen: function() {
        //$('body').css('position', 'fixed')
    },
    beforeClose: function() {
        //$('body').css('position', 'relative')
    }
});

function hfixed() {
    $(window).scrollTop() > 15 ? $("body").addClass("h-fixed") : $("body").removeClass("h-fixed")
}

function init_buttons(a) {
    $(a).each(function() {
        var a = $(this).text();
        $(this).html(""), $('<span class="original">' + a + '</span><span class="clone">' + a + "</span>").appendTo(this)
    })
}

function open_popup(a) {
    var b = $(a).attr("data-event"),
        c = $(a).attr("data-frmid");
    if ($(a).hasClass('btn_sec5') || $(a).hasClass('btn_check') || $(a).hasClass('btn_sec4')) {
        if ($(a).hasClass('btn_check')) {
            $('#pop_form h3').html('Записаться на обследование');
        } else {
            $('#pop_form h3').html('Записаться на предварительную консультацию');
        }
        $('#pop_form form input[name="usluga"]').hide();
    } else {
        if ($(a).hasClass('btn_check')) {
            $('#pop_form h3').html('Записаться на обследование');
        } else {
            $('#pop_form h3').html('Записаться на предварительную консультацию');
        }
        $('#pop_form form input[name="usluga"]').show();
    }
    $('#pop_form form input[name="event"]').val(b), $('#pop_form form input[name="frmid"]').val(c), $("#pop_form").arcticmodal()
}

function animate_popup() {
    var a = $(".cur_opened");
    $("#popup-animation").removeAttr("style");
    var b = $(".arcticmodal-container_i2 .pop_pl"),
        c = a.outerWidth(),
        d = a.outerHeight(),
        e = a.offset().left,
        f = a.offset().top,
        g = b.outerWidth(),
        h = b.outerHeight(),
        i = b.offset().left,
        j = b.offset().top;
    $("#popup-animation").css({
        "z-index": "10000",
        top: f + "px",
        left: e + "px",
        width: c + "px",
        height: d + "px"
    }), $("#popup-animation").animate({
        top: j + "px",
        left: i + "px",
        width: g + "px",
        height: h + "px"
    }, 300, function() {
        $(".arcticmodal-container_i2 .pop_pl").css("opacity", 1), $("#popup-animation").css("z-index", "999")
    })
}

function getURLParameter(a) {
    return decodeURIComponent((new RegExp("[?|&]" + a + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || null
}

function run_geo(a) {
    $.ajax({
        type: "GET",
        url: a,
        dataType: "xml",
        success: function(a) {
            $(a).find("ip").each(function() {
                var a = $(this).find("city").text(),
                    b = $(this).find("region").text();
                if (a != b) var c = a + ", " + b;
                else var c = a;
                $('<input type="hidden" />').attr({
                    name: "location",
                    "class": "location",
                    value: c
                }).appendTo("form")
            })
        }
    })
}

function submit_track_event(a) {
    yaCounter && yaCounter.reachGoal(a), ga && ga("send", "event", "submit", a)
}

function init_bg_video() {
    isMobile || $('<video id="bgvid" playsinline autoplay muted loop><source src="js/video.mp4" type="video/mp4"></video>').appendTo(".sec1")
}
init_bg_video(), $("img").each(function() {
    var a = $(this).attr("data-original");
    "undefined" != typeof a && a !== !1 && $(this).attr("src", $(this).data("original"))
}), $(document).ready(function() {
    init_buttons(".btn,.a-btn,.button"), $(".btn,.btn-link").click(function(a) {
        a.preventDefault(), open_popup(this)
    }), slider1 = $(".slider_s_w").bxSlider({
        infiniteLoop: !0,
        nextSelector: "#sld2r",
        prevSelector: "#sld2l",
        controls: !1,
        pager: !0,
        pagerCustom: ".slid_page",
        auto: !1,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        onSlideNext: function(a, b, c) {},
        onSlidePrev: function(a, b, c) {},
        onSliderLoad: function() {}
    });
    var a = !1;
    $("html").width() > 500 && (a = !0), slider2 = $(".slider_usl_gr.desc .slider_usl").bxSlider({
        infiniteLoop: a,
        nextSelector: "#sld2r",
        prevSelector: "#sld2l",
        controls: !0,
        pager: !0,
        pagerCustom: ".slider_usl_gr.desc .pager_usl",
        auto: !1,
        speed: 500,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 310,
        slideMargin: 20,
        onSlideNext: function(a, b, c) {},
        onSlidePrev: function(a, b, c) {},
        onSliderLoad: function() {}
    }), $("#sld2r").click(function(a) {
        a.preventDefault(), slider2.goToNextSlide()
    }), $("#sld2l").click(function(a) {
        a.preventDefault(), slider2.goToPrevSlide()
    }), slider3 = $(".slid_lic_m .slid_lic").bxSlider({
        infiniteLoop: a,
        nextSelector: ".slid_lic_m .str_r",
        prevSelector: ".slid_lic_m .str_l",
        controls: !0,
        pager: !1,
        auto: !1,
        speed: 500,
        slideWidth: 228,
        slideMargin: 20,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        onSlideNext: function(a, b, c) {},
        onSlidePrev: function(a, b, c) {},
        onSliderLoad: function() {}
    }), $(".slid_lic_m .str_r").click(function(a) {
        a.preventDefault(), slider3.goToNextSlide()
    }), $(".slid_lic_m .str_l").click(function(a) {
        a.preventDefault(), slider3.goToPrevSlide()
    }), $(".fancy").fancybox({
        helpers: {
            overlay: {
                locked: !1
            },
            title: null
        }
    }), $(".video a").click(function(a) {
        a.preventDefault(), $(this).closest(".video").html("").append('<iframe src="https://www.youtube.com/embed/_JCD_uMIdwg?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>')
    }), $(".yea_gr").mouseover(function() {
        var a = $(".year_h:visible"),
            b = a.offset().left,
            c = $(window).width() - a.offset().left - a.outerWidth();
        a.removeAttr("style"), b < 0 && a.css("margin-left", -b + "px"), c < 0 && a.css("margin-left", c + "px")
    }), $(".yea_gr").mouseleave(function() {
        $(".year_h").removeAttr("style")
    }), $(".pop_pl .form-button").click(function(a) {
        $(this).closest(".pop_pl").find("form").addClass("opened")
    }), $(".pop_pl .form-span-close").click(function(a) {
        $(this).closest(".pop_pl").find("form").removeClass("opened")
    }), $(".pop_pl .menu-btn").click(function() {
        $(this).closest(".pop_pl").find(".menu-part").toggleClass("opened")
    }), $(".p_m_link").click(function(a) {
        a.preventDefault(), $(this).closest(".pop_pl").find(".p_m_link").removeClass("active"), $(this).addClass("active"), $(this).closest(".pop_pl").find(".menu-part").removeClass("opened"), $(this).closest(".pop_pl").find(".menu-btn").html($(this).text()), $(this).closest(".pop_pl").find("iframe").attr("src", $(this).attr("data-src"))
    }), $(".a-btn").click(function(a) {
        a.preventDefault();
        var b = $(this).attr("data-target");
        "#us_1" == b ? $(b).find(".p_m_link.active").trigger("click") : $(b).find("iframe").attr("src", "ajax/content/" + b.substring(4) + ".html"), $(b).arcticmodal()
    }), $("#menu .link").click(function(a) {
        a.preventDefault(), $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1e3), $("#menu").hide()
    }), $("#menu .uslug").click(function(a) {
        a.preventDefault(), $("html, body").animate({
            scrollTop: $("#menu_3").offset().top
        }, 1e3), $("#menu").hide(), $('.a-btn[data-target="' + $(this).attr("href") + '"]').trigger("click")
    }), $(".popap .close,#okgo .close,.pop_pl .close").click(function() {
        $(this).parent().arcticmodal("close")
    }), $.get("http://ipinfo.io", function(a) {
        geo_url = "http://ipgeobase.ru:7020/geo?ip=" + a.ip, run_geo(geo_url)
    }, "jsonp"), utm = [], $.each(["utm_source", "utm_medium", "utm_campaign", "utm_term", "source_type", "source", "position_type", "position", "added", "creative", "matchtype"], function(a, b) {
        $('<input type="hidden" />').attr({
            name: b,
            "class": b,
            value: function() {
                return void 0 == getURLParameter(b) ? "-" : getURLParameter(b)
            }
        }).appendTo("form")
    }), $('<input type="hidden" />').attr({
        name: "url",
        value: document.location.href
    }).appendTo("form"), $('<input type="hidden" />').attr({
        name: "title",
        value: document.title
    }).appendTo("form"), $('input[name="name"]').blur(function() {
        $(this).val().length < 2 && $(this).addClass("error-input")
    }), $('input[name="name"]').focus(function() {
        $(this).removeClass("error-input")
    }), $('input[name="phone"]').mask("+7 (999) 999-99-99"), $('input[name="phone"]').blur(function() {
        18 != $(this).val().length && $(this).addClass("error-input")
    }), $('input[name="phone"]').focus(function() {
        $(this).removeClass("error-input")
    }), $("form").submit(function(a) {
        if (a.preventDefault(), $(this).find('input[type="text"]').trigger("blur"), !$(this).find('input[type="text"]').hasClass("error-input")) {
            var b = $(this).attr("method"),
                c = $(this).attr("action"),
                d = $(this).serialize(),
                e = $(this).find('input[name="event"]').val();
            $.ajax({
                type: b,
                url: c,
                data: d,
                success: function() {
                    $.arcticmodal("close"), $("#okgo").arcticmodal(), submit_track_event(e)
                }
            })
        }
    }), $("form .button").click(function(a) {
        a.preventDefault(), $(this).closest("form").submit()
    }), $(".menu_btn").click(function() {
        $("#menu").show()
    }), $(".close").click(function() {
        $("#menu").hide()
    }), $('<iframe id="map" src="ajax/map.html" frameborder="0"></iframe>').appendTo(".map .map-w")
}), $(window).scroll(function() {
    hfixed()
});
