(function ($) {
	"use strict";



			/*------  Left Aside Plane Menu dropdowns Start ------*/

          $(document).ready(function(){

            $('a.first_sub_menu').click(function(){

                if($(this).hasClass('active')){

                    $(this.parentElement.children[2]).slideUp();
                    $(this).removeClass('active');
                    $(this.parentElement.children[1]).addClass('fa-angle-up','fa');
                    $(this.parentElement.children[1]).removeClass('fa-angle-down','fa');

                } else {

                    $('.first_sub_menu').removeClass('active');
                    $('.slideup').slideUp();
                    $(this).addClass('active');
                    $(this.parentElement.children[2]).slideDown();
                    $(this.parentElement.children[1]).removeClass('fa-angle-up','fa');
                    $(this.parentElement.children[1]).addClass('fa-angle-down','fa');

                    var listFirst = $(this).parents('ul')[0].children;
                        
                    for (var i = 0; i < listFirst.length; i++) {

                         if (listFirst[i].children[0].className != "first_sub_menu active"  &&  listFirst[i].children[0].className != "") 
                         {  
                                listFirst[i].children[1].classList.remove('fa-angle-down','fa');
                                listFirst[i].children[1].classList.add('fa-angle-up','fa');
                         }else{


                         }
                    }

                }
            });



            $('.second_sub_menu').click(function(e){

                e.stopPropagation();
               if($(this).hasClass('active')){

                    $(this.parentElement.children[2]).slideUp();
                    $(this).removeClass('active');
                    $(this.parentElement.children[1]).addClass('fa-angle-up','fa');
                    $(this.parentElement.children[1]).removeClass('fa-angle-down','fa');

                } else {

                    $('.slideup a').removeClass('active');
                    $('.secondLevel').slideUp();
                    $(this).addClass('active');
                    $(this.parentElement.children[2]).slideDown();
                    $(this.parentElement.children[1]).removeClass('fa-angle-up','fa');
                    $(this.parentElement.children[1]).addClass('fa-angle-down','fa');

                    var listSecond = $(this).parents('ul')[0].children;


                     //console.log(listSecond);

                    for (var i = 0; i < listSecond.length; i++) {

                        
                        
                        if (listSecond[i].children[0].className != "second_sub_menu active"  &&  listSecond[i].children[0].className != "") 
                         {  

                           // console.log(listSecond[i]);

                                listSecond[i].children[1].classList.remove('fa-angle-down','fa');
                                listSecond[i].children[1].classList.add('fa-angle-up','fa');
                         }

                    }

                }
            })


    })
    /*------  Left Aside Plane Menu dropdowns End ------*/


    /*------ About us Read More & Read Less Start  ------*/      

                $(document).ready(function() {
                  $(".toggle").click(function() {

                    if (this.innerText == "Read More") 
                    {
                        $(this.previousElementSibling).slideDown();
                        $(this).text("Read Less");
                    }else{
                        $(this).text("Read More");
                        $(this.previousElementSibling).slideUp();
                    }

                  });
                });

    /*------ About us Read More & Read Less End  ------*/  
          



    /*------  Sticky Header Start ------*/

	var $window = $(window);
	$window.on('scroll', function () {
		var scroll = $window.scrollTop();
		if (scroll < 90) {
			$(".sticky").removeClass("is-sticky");
		} else {
			$(".sticky").addClass("is-sticky");
		}
	});
	    /*------  Sticky Header End ------*/

/*	$('.is-stickyy').stickySidebar({
		topSpacing: 10,
		bottomSpacing: -20
	}); 

*/
	
	/*-------- Swing Counter JS start --------*/

    $(document).ready(function() {
        $('.counter').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now)+"+");
                }
            });
        });
    });

    /*-------- Swing Counter JS End --------*/



    /*-------- Model Pop-up Image JS start --------*/

        $(function() {
            $('.pop_up_image').on('click', function() {
                $('.imagepreview').attr('src', '');
                $('.imagepreview').attr('src', $(this).find('img').attr('alt'));
                $('#image_expand_model').modal('show');   
            });     
        });

    /*-------- Model Pop-up Image JS End --------*/



    /*-------- Mobile View Hide/Show Menu JS start --------*/

    $(document).ready(function(){

        $('.Show').click(function(){
            $('html, body').animate({
                  scrollTop: $(".sidebar-single").offset().top
            }, 1000); 
            if($(this).hasClass('active')){
                $('.sidebar-single').slideDown('slow');
                $(this).removeClass('active');
                $(this).find('i').removeClass('fa fa-bars');
                $(this).find('i').addClass('fa fa-times');
            } else {
                $(this).addClass('active');
                $('.sidebar-single').slideUp('slow');
                $(this).find('i').removeClass('fa fa-times');
                $(this).find('i').addClass('fa fa-bars');
            }
        });

	})

     /*-------- Mobile View Hide/Show Menu JS start --------*/



	/*-------- Background Image JS start --------*/
	var bgSelector = $(".bg-img");
	bgSelector.each(function (index, elem) {
		var element = $(elem),
			bgSource = element.data('bg');
		element.css('background-image', 'url(' + bgSource + ')');
	});


	/*------- Image zoom effect start -------*/
	$('.img-zoom').zoom();
	/*------- Image zoom effect end -------*/


	/*------- tooltip active js start -------*/
	$('[data-toggle="tooltip"]').tooltip();
	/*------- tooltip active js start -------*/


	/*------ product slider active start ------*/
	$('.ht-slick-slider').slick({
		speed: 1000,
		autoplaySpeed: 5000,
		adaptiveHeight: true
	});
	/*------ product slider active end ------*/

	/*------ Hero main slider active start ------*/
	$('.hero-slider-active').slick({
		autoplay: false,
		speed: 1000,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="ion-ios-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-right"></i></button>',
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false,
			}
		}]
	});
	/*------ Hero main slider active end ------*/

	/*------ deals carousel active start ------*/
	$('.deals-carousel-active').slick({
		autoplay: false,
		speed: 1000,
		slidesToShow: 2,
		prevArrow: '<button type="button" class="slick-prev"><i class="ion-ios-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-right"></i></button>',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
	/*------ deals carousel active end ------*/

	/*------ deals carousel 2 active start ------*/
	$('.deals-carousel-active-2').each(function () {
		var $this = $(this);
		var $arrowContainer = $(this).parent().siblings('.section-header-inner_2').find('.slick-append');
		$this.slick({
			infinite: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="ion-ios-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-right"></i></button>',
			appendArrows: $arrowContainer
		});
	});
	/*------ deals carousel 2 active end ------*/

	/*------ features categories  active start ------*/
	$('.features-categories-active').slick({
		autoplay: false,
		speed: 1000,
		slidesToShow: 3,
		prevArrow: '<button type="button" class="slick-prev"><i class="ion-ios-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-right"></i></button>',
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
	/*------ features categories active end ------*/

	/*------ features product active start ------*/
	$('.features-product-carousel').slick({
		autoplay: false,
		speed: 1000,
		slidesToShow: 3,
		prevArrow: '<button type="button" class="slick-prev"><i class="ion-ios-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-right"></i></button>',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
	/*------ features product active end ------*/

	/*------ group list carousel active start ------*/
	$('.group-list-carousel').each(function () {
		var $this = $(this);
		var $arrowContainer = $(this).parent().siblings('.group-list-header').find('.slick-append');
		$this.slick({
			infinite: true,
			rows: 3,
			prevArrow: '<button type="button" class="slick-prev"><i class="ion-ios-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-right"></i></button>',
			appendArrows: $arrowContainer,
			responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		});
	});
	/*------ group list carousel active end ------*/

	/*------ new products active start ------*/
	$('.new-products-carousel').each(function () {
		var $this = $(this);
		var $arrowContainer = $(this).parent().siblings('.section-header-inner_2').find('.slick-append');
		$this.slick({
			slidesToShow: 2,
			prevArrow: '<button type="button" class="slick-prev"><i class="ion-ios-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-right"></i></button>',
			appendArrows: $arrowContainer,
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}]
		});
	});
	/*------ new products active end ------*/

	/*------ most viewed active start ------*/
	$('.most-viewed-carousel').each(function () {
		var $this = $(this);
		var $arrowContainer = $(this).parent().siblings('.section-header-inner_2').find('.slick-append');
		$this.slick({
			slidesToShow: 4,
			prevArrow: '<button type="button" class="slick-prev"><i class="ion-ios-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-right"></i></button>',
			appendArrows: $arrowContainer,
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}]
		});
	});
	/*------ most viewed active end ------*/

	/*------ most viewed 2 active start ------*/
	$('.most-viewed-carousel-2').slick({
		speed: 1000,
		slidesToShow: 4,
		prevArrow: '<button type="button" class="slick-prev"><i class="ion-ios-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-right"></i></button>',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
	/*------ most viewed 2 active end ------*/

	/*------ brand logo active start ------*/
	$('.brand-logo-carousel').slick({
		arrows: false,
		autoplay: true,
		speed: 1000,
		slidesToShow: 5,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
	/*------ brand logo active end ------*/

	/*-------- prodct details slider active start --------*/
    $('.product-large-slider').slick({
        fade: true,
        arrows: false,
        asNavFor: '.pro-nav'
    });

    // product details slider nav active
    $('.pro-nav').slick({
        slidesToShow: 4,
        asNavFor: '.product-large-slider',
        centerMode: true,
        centerPadding: 0,
		focusOnSelect: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		responsive: [{
			breakpoint: 576,
			settings: {
				slidesToShow: 3,
			}
		}]
	});
	/*-------- prodct details slider active end --------*/

	/*------ product slider box start ------*/
	$('.product-slider-box').slick({
		autoplay: true,
		speed: 1000,
		slidesToShow: 4,
		prevArrow: '<button type="button" class="slick-prev"><i class="ion-ios-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-right"></i></button>',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
	/*------ product slider box active end ------*/

	/*------ blog carousel active start ------*/
	$('.blog-carousel-active').slick({
		autoplay: false,
		speed: 1000,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="ion-ios-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-right"></i></button>',
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false,
			}
		}]
	});
	/*------ blog carousel active end ------*/


	/*------- nice select active start -------*/
	$('select').niceSelect();
	/*------- nice select active end -------*/


	/*-------- Off Canvas Open close start--------*/
	$(".off-canvas-btn").on('click', function () {
		$("body").addClass('fix');
		$(".off-canvas-wrapper").addClass('open');
	});

	$(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
		$("body").removeClass('fix');
		$(".off-canvas-wrapper").removeClass('open');
	});
	/*-------- Off Canvas Open close end--------*/


	/*------- product view mode change js start -------*/
    $('.product-view-mode a').on('click', function (e) {
        e.preventDefault();
        var shopProductWrap = $('.shop-product-wrap');
        var viewMode = $(this).data('target');
        $('.product-view-mode a').removeClass('active');
        $(this).addClass('active');
        shopProductWrap.removeClass('grid-view list-view').addClass(viewMode);
	})
	/*------- product view mode change js end -------*/


	/*------- Countdown Activation start -------*/
	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Mins</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Secs</span></div>'));
		});
	});
	/*------- Countdown Activation end -------*/


	// quantity change js
    $('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
    $('.pro-qty').append('<span class="inc qtybtn">+</span>');
    $('.qtybtn').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });


	/*-------- scroll to top start --------*/
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 170) {
			$('.scroll-top').removeClass('not-visible');
		} else {
			$('.scroll-top').addClass('not-visible');
		}
	});
	$('.scroll-top').on('click', function (event) {
		$('html,body').animate({
			scrollTop: 0
		}, 1000);
	});
	/*-------- scroll to top end --------*/


	/*------- Category Menu start -------*/
	// Variables
	var categoryToggleWrap = $('.category-toggle-wrap');
	var categoryToggle = $('.category-toggle');
	var categoryMenu = $('.category-menu');

	// Category Menu Toggles
	function categorySubMenuToggle() {
		var screenSize = $window.width();
		if (screenSize <= 991) {
			$('.category-menu .menu-item-has-children > a').prepend('<span class="expand menu-expand">+</span>');
			$('.category-menu .menu-item-has-children ul').slideUp();
		} else {
			$('.category-menu .menu-item-has-children > a .menu-expand').remove();
			$('.category-menu .menu-item-has-children ul').slideDown();
		}
	}

	$(window).on({
		load: function () {
			categorySubMenuToggle();
		},
		resize: function () {
			categorySubMenuToggle();
		}
	});

	categoryToggle.on('click', function () {
		categoryMenu.slideToggle();
	});

	// Category Sub Menu
	$('.category-menu').on('click', 'li a, li a .menu-expand', function (e) {
		var $a = $(this).hasClass('menu-expand') ? $(this).parent() : $(this);
		if ($a.parent().hasClass('menu-item-has-children')) {
			if ($a.attr('href') === '#' || $(this).hasClass('menu-expand')) {
				if ($a.siblings('ul:visible').length > 0) $a.siblings('ul').slideUp();
				else {
					$(this).parents('li').siblings('li').find('ul:visible').slideUp();
					$a.siblings('ul').slideDown();
				}
			}
		}
		if ($(this).hasClass('menu-expand') || $a.attr('href') === '#') {
			e.preventDefault();
			return false;
		}
	});
	/*------- Category Menu end -------*/


	/*------- responsive mobile menu start -------*/
	//Variables
	var $offCanvasNav = $('.mobile-menu'),
		$offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

	//Add Toggle Button With Off Canvas Sub Menu
	$offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

	//Close Off Canvas Sub Menu
	$offCanvasNavSubMenu.slideUp();

	//Category Sub Menu Toggle
	$offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
		var $this = $(this);
		if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
			e.preventDefault();
			if ($this.siblings('ul:visible').length) {
				$this.parent('li').removeClass('icon-show');
				$this.siblings('ul').slideUp();
			} else {
				$this.parent('li').addClass('icon-show');
				$this.closest('li').siblings('li').find('ul:visible').slideUp();
				$this.siblings('ul').slideDown();
			}
		}
	});
	/*------- responsive mobile menu end -------*/


	/*------- Checkout Page accordion start -------*/
    $("#create_pwd").on("change", function () {
        $(".account-create").slideToggle("100");
    });

    $("#ship_to_different").on("change", function () {
        $(".ship-to-different").slideToggle("100");
    });

    // Payment Method Accordion
    $('input[name="paymentmethod"]').on('click', function () {
        var $value = $(this).attr('value');
        $('.payment-method-details').slideUp();
        $('[data-method="' + $value + '"]').slideDown();
	});
	/*------- Checkout Page accordion start -------*/


	// Mailchimp for dynamic newsletter
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'https://company.us19.list-manage.com/subscribe/post?u=2f2631cacbe4767192d339ef2&amp;id=24db23e68a'

    });


    // mailchimp active js
    function mailChimpResponse(resp) {
        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);

        } else if (resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }
	}

	// slide effect dropdown
	function dropdownAnimation() {
		$('.toggle-bar').on('show.bs.toggle-bar', function (e) {
			$(this).find('.dropdown-list').first().stop(true, true).slideDown(5000);
		});

		$('.toggle-bar').on('hide.bs.toggle-bar', function (e) {
			$(this).find('.dropdown-list').first().stop(true, true).slideUp(5000);
		});
	}
	dropdownAnimation();

}(jQuery));
