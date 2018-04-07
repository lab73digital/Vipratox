$(document).ready(function() {
    //this function triggers tooltip after hovering on specific element
    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-light'
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
    ltHeader.from('#header', 0.5, {top: -100})
        .from(['.overview__top', '.overview__content'], 0.5, {
            autoAlpha: 0
        })
         .from('h1', 0.4, {
            autoAlpha: 0,
            scaleX: 0.7,
            scaleY: 0.7,
            yPercent: -50,
            ease: Power2.easeOut
         })
        .from('.overview .heading', 0.3, {
            autoAlpha: 0
        })
        .from('.overview__top .mobile-img', 0.3, {
            autoAlpha: 0,
            xPercent: 150,
            ease: Back.easeOut.config(1)
        })
        .from('.overview__bottom .mobile-img', 0.3, {
            autoAlpha: 0,
            xPercent: -150,
            ease: Back.easeOut.config(1.7)
        })
        .from('.overview p', 0.3, {
            autoAlpha: 0
        }, '-=0.6')
        .from('.overview__top .desktop-img', 0.3, {
            autoAlpha: 0,
            xPercent: 150,
            ease: Back.easeOut.config(1)
        }, 'desktopImg')
        .from('.overview__bottom .desktop-img', 0.3, {
            autoAlpha: 0,
            xPercent: -100,
            ease: Back.easeOut.config(1)
        }, 'desktopImg');


    scene.setTween(ltHeader).addTo(controller);


    ///////////////////////////////////////////////////
    ///Animation for section product starts here///
    ///////////////////////////////////////////////////

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.product',
        reverse: false
    });

    var tlProduct = new TimelineLite();
    tlProduct
    .from('.product', 0.3, {
        autoAlpha: 0
    })
    .from('.product h2', 0.3, {
        autoAlpha: 0
    })
    .from('.product__heading', 0.5, {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        ease: Circ.easeOut
    })
    .from('.product .heading', 0.1, {
        autoAlpha: 0
    })
    .staggerFrom('.product__list li', 0.6, {
        autoAlpha: 0,
        delay: -0.1
    }, 0.2)
    .from('.product img', 0.3, {
        autoAlpha: 0,
        xPercent: 100,
        ease: Back.easeOut.config(1)
    }, '-=0.5');

    scene2.setTween(tlProduct).addTo(controller);

    ///////////////////////////////////////////////////
    //Animation for section instruction starts here////
    ///////////////////////////////////////////////////
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.instruction',
        reverse: false
    });

    var tlInstruction = new TimelineLite();
    tlInstruction.staggerFrom(['.instruction .title', '.instruction__form', '.instruction__composition', '.instruction__supplementary'], 0.3, {
        autoAlpha: 0,
        scaleX: 0.5,
        scaleY: 0.5
    }, 0.2)
        .from('.instruction img', 0.3, {
            autoAlpha: 0,
            xPercent: -100,
            ease: Back.easeOut.config(1)
        });
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
    .staggerFrom(['.indication .title', '.indication .heading'], 0.3, {
        autoAlpha: 0,
        scaleX: 0.5,
        scaleY: 0.5
    }, 0.2)
    .staggerFrom(['.js-indicationFirst', '.js-indicationSecond'], 0.5, {
        autoAlpha: 0,
        xPercent: -100,
        delay: -0.1,
        ease: Back.easeOut.config(1.1)
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

        tlUsage.from('.usage .title', 0.3, {
            autoAlpha: 0,
            scaleX: 0.5,
            scaleY: 0.5
        })
        .staggerFrom('.usage-item', 0.5, {
            yPercent: 200,
            ease: Back.easeOut.config(1)
        }, 0.4, 'usage-box')
        .staggerFrom('.usage-item img', 0.3, {
            autoAlpha: 0
        }, 0.2, 'usage-box')
        .staggerFrom('.usage-item .heading', 0.3, {
            autoAlpha: 0,
            scaleX: 0.9,
            scaleY: 0.9
        }, 0.2, 'usage-box+=0.8')
        .staggerFrom('.usage-item p', 0.3, {
            autoAlpha: 0,
            yPercent: 100,
            ease: Back.easeOut.config(1)
        }, 0.2, 'usage-box+=1.3');

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

        tlStorage.staggerFrom(['.storage .title', '.storage p', '.storage svg'], 0.5, {
            autoAlpha: 0,
            scaleX: 0.5,
            scaleY: 0.5
        }, 0.3)
        .staggerFrom('.btn-box a',0.5, {
            autoAlpha: 0,
            yPercent: 400,
            ease: Back.easeOut.config(1.5)
        }, 0.3)
        .staggerFrom(['.caution', 'footer'], 0.3, {
            autoAlpha: 0
        }, 0.3);

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
                    bottom: '0%'
                })
                .staggerTo('.nav-mobile a', 0.5, {x:'0%'}, 0.1);
        }
        else {
            tlMenu
                .staggerTo('.nav-mobile a', 0.5, {x:'-500%'}, 0.1)
                .to('.nav-mobile', 0.3, {
                    bottom: '100%'
                }, "-=0.3");
        }
    }

    $(window).on("scroll", function(){
        console.log(this);
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 0) {
            $('header').removeClass('js-box-shadow');
            $('header').addClass('js-box-border')
        }
        else {
            $('header').addClass('js-box-shadow');
            $('header').removeClass('js-box-border')
        }
    });



});