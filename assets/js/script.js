$(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;  //meaning, don't do anything again
    });

    // $("[data-fancybox]").fancybox();
    // $(".open-button").fancybox();

    // document.querySelector(".nav-link.icons.phone-call").addEventListener("click", function(event){
    //   event.preventDefault();
      // window.location.href = "tel:0202677472";
    //   console.console.log(123456);
    // });

    // document.getElementById("phone-call").addEventListener("click", function(event){
    //   event.preventDefault();
    //   console.console.log("1234565");
    // });
});



$(document).ready(function() {

    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });


    $('.in-nav').click(function() {
        $(this).addClass('clicked-on').siblings().removeClass('clicked-on');
    });

//   $(".nav-link icons phone-call").click(function(e) {
    //   e.preventDefault();
//   });

  // var date = new Date();
  // // var year date.getFullYear();
  // console.log(date);

  // $(function () {
  //   $('.floating-wpp').floatingWhatsApp({
  //     phone: 'xxxxxxxxxx',
  //     popupMessage: 'Popup Message',
  //     showPopup: true,
  //     message: 'Message To Send',
  //     headerTitle: 'Header Title',
  //     buttonImage: '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 800 800" width="800" height="800"><defs><clipPath id="_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ"><rect width="800" height="800"/></clipPath></defs><g clip-path="url(#_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ)"><g><path d=" M 787.59 800 L 12.41 800 C 5.556 800 0 793.332 0 785.108 L 0 14.892 C 0 6.667 5.556 0 12.41 0 L 787.59 0 C 794.444 0 800 6.667 800 14.892 L 800 785.108 C 800 793.332 794.444 800 787.59 800 Z " fill="rgb(37,211,102)"/></g><g><path d=" M 508.558 450.429 C 502.67 447.483 473.723 433.24 468.325 431.273 C 462.929 429.308 459.003 428.328 455.078 434.22 C 451.153 440.114 439.869 453.377 436.434 457.307 C 433 461.236 429.565 461.729 423.677 458.78 C 417.79 455.834 398.818 449.617 376.328 429.556 C 358.825 413.943 347.008 394.663 343.574 388.768 C 340.139 382.873 343.207 379.687 346.155 376.752 C 348.804 374.113 352.044 369.874 354.987 366.436 C 357.931 362.999 358.912 360.541 360.875 356.614 C 362.837 352.683 361.857 349.246 360.383 346.299 C 358.912 343.352 347.136 314.369 342.231 302.579 C 337.451 291.099 332.597 292.654 328.983 292.472 C 325.552 292.301 321.622 292.265 317.698 292.265 C 313.773 292.265 307.394 293.739 301.996 299.632 C 296.6 305.527 281.389 319.772 281.389 348.752 C 281.389 377.735 302.487 405.731 305.431 409.661 C 308.376 413.592 346.949 473.062 406.015 498.566 C 420.062 504.634 431.03 508.256 439.581 510.969 C 453.685 515.451 466.521 514.818 476.666 513.302 C 487.978 511.613 511.502 499.06 516.409 485.307 C 521.315 471.55 521.315 459.762 519.842 457.307 C 518.371 454.851 514.446 453.377 508.558 450.429 Z  M 401.126 597.117 L 401.047 597.117 C 365.902 597.104 331.431 587.661 301.36 569.817 L 294.208 565.572 L 220.08 585.017 L 239.866 512.743 L 235.21 505.332 C 215.604 474.149 205.248 438.108 205.264 401.1 C 205.307 293.113 293.17 205.257 401.204 205.257 C 453.518 205.275 502.693 225.674 539.673 262.696 C 576.651 299.716 597.004 348.925 596.983 401.258 C 596.939 509.254 509.078 597.117 401.126 597.117 Z  M 567.816 234.565 C 523.327 190.024 464.161 165.484 401.124 165.458 C 271.24 165.458 165.529 271.161 165.477 401.085 C 165.46 442.617 176.311 483.154 196.932 518.892 L 163.502 641 L 288.421 608.232 C 322.839 627.005 361.591 636.901 401.03 636.913 L 401.126 636.913 L 401.127 636.913 C 530.998 636.913 636.717 531.2 636.77 401.274 C 636.794 338.309 612.306 279.105 567.816 234.565" fill-rule="evenodd" fill="rgb(255,255,255)"/></g></g></svg>'
  //     buttonImage: '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 800 800" width="800" height="800"><defs><clipPath id="_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ"><rect width="800" height="800"/></clipPath></defs><g clip-path="url(#_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ)"><g><path d=" M 787.59 800 L 12.41 800 C 5.556 800 0 793.332 0 785.108 L 0 14.892 C 0 6.667 5.556 0 12.41 0 L 787.59 0 C 794.444 0 800 6.667 800 14.892 L 800 785.108 C 800 793.332 794.444 800 787.59 800 Z " fill="rgb(37,211,102)"/></g><g><path d=" M 508.558 450.429 C 502.67 447.483 473.723 433.24 468.325 431.273 C 462.929 429.308 459.003 428.328 455.078 434.22 C 451.153 440.114 439.869 453.377 436.434 457.307 C 433 461.236 429.565 461.729 423.677 458.78 C 417.79 455.834 398.818 449.617 376.328 429.556 C 358.825 413.943 347.008 394.663 343.574 388.768 C 340.139 382.873 343.207 379.687 346.155 376.752 C 348.804 374.113 352.044 369.874 354.987 366.436 C 357.931 362.999 358.912 360.541 360.875 356.614 C 362.837 352.683 361.857 349.246 360.383 346.299 C 358.912 343.352 347.136 314.369 342.231 302.579 C 337.451 291.099 332.597 292.654 328.983 292.472 C 325.552 292.301 321.622 292.265 317.698 292.265 C 313.773 292.265 307.394 293.739 301.996 299.632 C 296.6 305.527 281.389 319.772 281.389 348.752 C 281.389 377.735 302.487 405.731 305.431 409.661 C 308.376 413.592 346.949 473.062 406.015 498.566 C 420.062 504.634 431.03 508.256 439.581 510.969 C 453.685 515.451 466.521 514.818 476.666 513.302 C 487.978 511.613 511.502 499.06 516.409 485.307 C 521.315 471.55 521.315 459.762 519.842 457.307 C 518.371 454.851 514.446 453.377 508.558 450.429 Z  M 401.126 597.117 L 401.047 597.117 C 365.902 597.104 331.431 587.661 301.36 569.817 L 294.208 565.572 L 220.08 585.017 L 239.866 512.743 L 235.21 505.332 C 215.604 474.149 205.248 438.108 205.264 401.1 C 205.307 293.113 293.17 205.257 401.204 205.257 C 453.518 205.275 502.693 225.674 539.673 262.696 C 576.651 299.716 597.004 348.925 596.983 401.258 C 596.939 509.254 509.078 597.117 401.126 597.117 Z  M 567.816 234.565 C 523.327 190.024 464.161 165.484 401.124 165.458 C 271.24 165.458 165.529 271.161 165.477 401.085 C 165.46 442.617 176.311 483.154 196.932 518.892 L 163.502 641 L 288.421 608.232 C 322.839 627.005 361.591 636.901 401.03 636.913 L 401.126 636.913 L 401.127 636.913 C 530.998 636.913 636.717 531.2 636.77 401.274 C 636.794 338.309 612.306 279.105 567.816 234.565" fill-rule="evenodd" fill="rgb(255,255,255)"/></g></g></svg>'
  //   });
  // });


    // Display the year Automatically
    var date = new Date();
    var year = date.getFullYear();
    // console.log(year);
    document.querySelector("#year").innerHTML = year;



    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });



    var typed = new Typed(".typed", {
        strings: ["Application Developer.", "Passionate Technology Student..."],
        typeSpeed: 100,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });



    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 4,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });



    var skillsTopOffset = $(".skills-section").offset().top;
    var statsTopOffset = $(".stats-section").offset().top;
    var countUpFinished = false;

    $(window).scroll(function() {

        let position = $(this).scrollTop();
        // console.log(position);

        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
        // if(position >= 933) {

            $(".chart").easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: true,
                scaleColor: true,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
        // if(position >= 1512) {

            $(".counter").each(function() {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            });

            countUpFinished = true;
        }
    });


    $("#navigation li a.in-nav").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50}, "slow");
    });


    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixed-nav");
        }
        else {
            body.removeClass("fixed-nav");
            body.css("padding-top", 0);
        }
    }

    $("#share").jsSocials({
        shares: ["email", "twitter", "facebook", "linkedin", "whatsapp"],
        url: "https://joshuagato.github.io/",
        text: "Joshua Gato's Portfolio Website",
        showLabel: false,
        showCount: true,
        shareIn: "blank",
        on: {
            click: function(e) {},
            mouseenter: function(e) {},
            mouseleave: function(e) {},
        },
        setDefaults: {
            showLabel: true,
            showCount: "inside"
        }
    });


    // $.fancybox([data-fancybox]);
    // $.fancybox.showLoading()
    $('[data-fancybox="gallery"]').fancybox({
    	// Options will go here
    });





    // $("[data-fancybox]").fancybox({
    //     helpers:  {
    //         title : {
    //             type : 'inside'
    //         },
    //         overlay : {
    //             showEarly : false
    //         },
    //         thumbs : {
    //             width: 50,
    //             height: 50
    //         }
    //     }
    // });

});
