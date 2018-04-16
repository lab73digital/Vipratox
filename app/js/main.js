$(document).ready(function() {
    //this function triggers tooltip after hovering on specific element
    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-light',
        interactive: true,
        contentAsHTML: true,
        viewportAware: true
    });

    var $window = $(window);
    var scrollTime = 0.5;
    var scrollDistance = 190;


    //scroll properties start here

    $window.on("mousewheel DOMMouseScroll", function (event) {

        event.preventDefault();

        var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta * scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo: {y: finalScroll, autoKill: true},
            ease: Power1.easeOut,
            overwrite: 5
        });

    });

    ////////////////////////////////////////
    ////////////////////////////////////////
    //////////////ANIMATION/////////////////
    ////////////////////////////////////////
    ////////////////////////////////////////


    ////////////////////////////////////////////////////////////
    ///Animation for header and overview section starts here///
    ///////////////////////////////////////////////////////////
    var controller = new ScrollMagic.Controller();
    //triggering animation when triggerElement is visible in window
    var scene = new ScrollMagic.Scene({
        triggerElement: '#header',
        reverse: false
    });
    var ltHeader = new TimelineLite();
    ltHeader
         .from(['.overview__top', '.overview__content'], 0.5, {
            autoAlpha: 0
         })
         .from('h1', 0.8, {
            autoAlpha: 0,
            yPercent: -20
         })
         .from('.overview__top .heading', 0.3, {
            autoAlpha: 0
         }, '-=0.2')
         .from('.overview__top p', 0.3, {
            autoAlpha: 0
         })
         .from('.overview__top .desktop-img', 0.8, {
            autoAlpha: 0,
            xPercent: 20
         })
         .from('.overview__bottom .desktop-img', 0.8, {
            autoAlpha: 0,
            xPercent: -5
         }, '-=0.2')
         .from('.overview__bottom .heading', 0.3, {
            autoAlpha: 0
         },'-=0.4')
         .from('.overview__bottom p', 0.3, {
            autoAlpha: 0
         }, 'desktop-end')
         .from('.overview__top .mobile-img', 0.3, {
            autoAlpha: 0
         }, 'desktop-end-=1.2')
        .from('.overview__bottom .mobile-img', 0.3, {
            autoAlpha: 0
        });


    scene.setTween(ltHeader).addTo(controller);


    ///////////////////////////////////////////////////
    ///Animation for section product starts here///
    ///////////////////////////////////////////////////

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.product',
        reverse: false,
        offset: -200
    });

    var tlProduct = new TimelineLite();
    tlProduct
    .from('.product', 0, {
        autoAlpha: 0
    })
    .from('.product h2', 0.6, {
        autoAlpha: 0
    })
    .from('.product .heading', 0.3, {
        autoAlpha: 0
    }, '-=0.2')
    .from('.product .mobile-img', 0.8, {
        autoAlpha: 0
    })
    .staggerFrom('.product__list li', 0.6, {
        autoAlpha: 0,
        delay: -0.1
    }, 0.2, '-=0.8')
    .from('.product .desktop-img', 0.8, {
        autoAlpha: 0
    }, '-=0.6');

    scene2.setTween(tlProduct).addTo(controller);

    ///////////////////////////////////////////////////
    //Animation for section instruction starts here////
    ///////////////////////////////////////////////////
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.instruction',
        reverse: false,
        offset: -200
    });

    var tlInstruction = new TimelineLite();
    tlInstruction
        .from('.instruction .title', 0.2, {
            autoAlpha: 0
        })
        .from('.instruction img', 0.5, {
            autoAlpha: 0,
            xPercent: -20
        })
        .staggerFrom(['.instruction__form', '.instruction__composition', '.instruction__supplementary'], 0.3, {
        autoAlpha: 0
    }, 0.2, '-=0.4');
    scene3.setTween(tlInstruction).addTo(controller);
    //////////////////////////////////////////////////
    ///Animation for section indication starts here///
    //////////////////////////////////////////////////
    var scene4 = new ScrollMagic.Scene({
        triggerElement: '.indication',
        reverse: false,
        offset: -200
    });
    var tlIndication = new TimelineMax();

    tlIndication.from('.indication', 0.3, {
        autoAlpha: 0
    })
    .staggerFrom(['.indication .title', '.indication .heading'], 0.2, {
        autoAlpha: 0
    }, 0.1)
    .staggerFrom(['.js-indicationFirst', '.js-indicationSecond'], 0.5, {
        autoAlpha: 0,
        xPercent: -15,
        delay: -0.1
    }, 0.3);
    scene4.setTween(tlIndication).addTo(controller);



    //////////////////////////////////////////////////
    /////Animation for section usage starts here//////
    //////////////////////////////////////////////////
    var scene5 = new ScrollMagic.Scene({
        triggerElement: '.usage',
        reverse: false,
        offset: -200
    });
    var tlUsage = new TimelineMax();

        tlUsage.from('.usage .title', 0.2, {
            autoAlpha: 0
        })
        .staggerFrom('.usage-item', 0.5, {
            autoAlpha: 0,
            yPercent: 30
        }, 0.2, 'usage-box')
        .staggerFrom('.usage-item p', 0.5, {
            autoAlpha: 0,
            yPercent: 30
        }, 0.2, 'usage-box+=0.2');

    scene5.setTween(tlUsage).addTo(controller);

    //////////////////////////////////////////////////
    ///Animation for section storage starts here//////
    //////////////////////////////////////////////////
    var scene6 = new ScrollMagic.Scene({
        triggerElement: '.storage',
        reverse: false,
        offset: -200
    });
    var tlStorage = new TimelineMax();

        tlStorage.staggerFrom(['.storage .title', '.storage p'], 0.5, {
            autoAlpha: 0
        }, 0.3)
        .staggerFrom('.btn-box a',0.3, {
            autoAlpha: 0,
            yPercent: 50
        }, 0.2)
        .staggerFrom(['.caution', 'footer'], 0.2, {
            autoAlpha: 0
        }, 0.1, '-=1');

    scene6.setTween(tlStorage).addTo(controller);

    ////////////////////////////////////////
    ////////////////////////////////////////
    /////////////END ANIMATION//////////////
    ////////////////////////////////////////
    ////////////////////////////////////////

    //burger menu trigger with menu animation
    $('.menu-slim').on("click", animateMenu);
    $('.nav-mobile a').on("click", goToLink);
    $('.logo a').on("click", goToLink);

    function goToLink(){
        var tlMenu = new TimelineMax();
        tlMenu
            .staggerTo('.nav-mobile a', 0.5, {x:'-500%'}, 0.1)
            .to('.nav-mobile', 0.3, {
                bottom: '100%'
            }, "-=0.3");
        $('.menu-slim').removeClass("menu-js-toggle");
    }

    function animateMenu(){
        $(this).toggleClass("menu-js-toggle");
        var tlMenu = new TimelineMax();
        if ($(this).hasClass("menu-js-toggle")) {
            $('.js-box-shadow').css("box-shadow", "none");
            tlMenu
                .to('.nav-mobile', 0.3, {
                    bottom: '0%',
                    ease: Power3.easeOut
                })
                .staggerTo('.nav-mobile a', 0.5, {x:'0%'}, 0.1);
        }
        else {
            tlMenu
                .staggerTo('.nav-mobile a', 0.5, {x:'-500%'}, 0.1)
                .to('.nav-mobile', 0.3, {
                    bottom: '100%',
                    ease: Power3.easeOut
                }, "-=0.3");
        }
    }

    $(window).on("scroll", function(){
        if ($(window).scrollTop() > 0) {
            $('header').removeClass('js-box-shadow');
            $('header').addClass('js-box-border')
        }
        else {
            $('header').addClass('js-box-shadow');
            $('header').removeClass('js-box-border');
        }
    });

});