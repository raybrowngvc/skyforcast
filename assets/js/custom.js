/*--------------------- Copyright (c) 2022 -----------------------
[Master Javascript]
Project: Weather-Hubs - Responsive HTML Template 
Version: 1.0.0
Assigned to: 
-------------------------------------------------------------------*/
(function($) {
    "use strict";
    /*-----------------------------------------------------
    	Function  Start
    -----------------------------------------------------*/
    var Weather = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-----------------------------------------------------
            	Function Calling
            -----------------------------------------------------*/
            this.preLoader();
            this.navMenu();
            this.focusText();           
            this.topButton();
            this.popupGallery();
            this.videpopup();
            this.StickyHeader();
            this.serviceslider();
            this.giftslider();
            this.evnslider();
            this.recentsearchslider();
            this.climatetab1();
            this.climatetab2();
            this.wowanimation();
        },
        /*-----------------------------------------------------
        	Fix Preloader
        -----------------------------------------------------*/
        preLoader: function() {
            $(window).on('load', function() {
                $(".preloader_wrapper").removeClass('preloader_active');
            });
            jQuery(window).on('load', function() {
                setTimeout(function() {
                    jQuery('.preloader_open').addClass('loaded');
                }, 100);
            });
        },
      /*-----------------------------------------------------
        	Fix Mobile Menu 
        -----------------------------------------------------*/
        navMenu: function() {
            $(document).ready(function(){
                $(document).on("click", function(event){
                  var $trigger = $(".wea_menu_btn");
                    if($trigger !== event.target && !$trigger.has(event.target).length){
                        $("body").removeClass("open-toggle");
                    }            
                });
                $(".wea_menu_btn").click(function(){
                  $("body").toggleClass("open-toggle");
                });
              });
        },
        /*-----------------------------------------------------
        	Fix  On focus Placeholder
        -----------------------------------------------------*/
        focusText: function() {
            var place = '';
            $('input,textarea').focus(function() {
                place = $(this).attr('placeholder');
                $(this).attr('placeholder', '');
            }).blur(function() {
                $(this).attr('placeholder', place);
            });
        },

        /*-----------------------------------------------------
        	Fix GoToTopButton
        -----------------------------------------------------*/
        topButton: function() {
            var scrollToTopButton = $("#scroll");
            $(window).on('scroll', function() {
                if ($(this).scrollTop() < 500) {
                    scrollToTopButton.removeClass("activeButton");
                } else {
                    scrollToTopButton.addClass("activeButton");
                }
            });
            $('#scroll').click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 300);
                return false;
            });
        },
        /*-----------------------------------------------------
        	Fix Gallery Magnific Popup
        -----------------------------------------------------*/
        popupGallery: function() {
            jQuery(document).ready(function() {
                $('.popup_gallery, .popup_gallery1, .popup_gallery2, .popup_gallery3').magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    mainClass: 'mfp-img-mobile',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                    },
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                        titleSrc: function(item) {
                            return item.el.attr('title') + '<small></small>';
                        }
                    }
                });
            });
        },
        // video popup
        videpopup:function(){
            jQuery(document).ready(function() {
                if ($(".play_video").length > 0) {
                    $(".play_video").magnificPopup({
                        type: 'iframe'
                    });
                }
                if ($(".video_popup").length > 0) {
                    $(".video_popup").magnificPopup({
                        type: 'inline'
                    });
                }
            });
        },
        /*-----------------------------------------------------
        	Fix  Sticky Header
        -----------------------------------------------------*/
        StickyHeader: function() {
            var header = $("header");
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= 500 && $(this).width() > 991) {
                    header.addClass("fixed_header animated fadeInDown");
                } else {
                    header.removeClass('fixed_header animated fadeInDown');
                }
            });
        },

        serviceslider: function () {
            var swiper = new Swiper(".swiper_service_slider", {
                slidesPerView: 3,
                spaceBetween: 10,
                loop: true,
                speed: 2000,
                autoplay: {
                    delay: 2000,
                },
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                breakpoints: {
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  767: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  991: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                },
              });
        },
        giftslider: function() {
            var giftRepository = new Swiper('.wedTestshop.swiper-container', {
                autoplay: true,
                slidesPerView: 3,
                loop: true,
                speed: 3500,
                autoplay: {
                    delay: 2000,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                breakpoints: {
                    480: {
                        slidesPerView: 1,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                }
            });
        },
        evnslider: function(){
            var swiper = new Swiper(".wed_evenslider", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: "true",
                  },
                breakpoints: {
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  992: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                },
              });
        },
        recentsearchslider: function(){
            var swiper = new Swiper(".wea_search_swiper", {
                slidesPerView: 4,
                loop: true,
                autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
                },
                spaceBetween: 30,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                breakpoints: {
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },  
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1399: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  },
              });
        },
        climatetab1: function(){
            var swiper = new Swiper(".wea_tabs1", {
                slidesPerView: 6,
                spaceBetween: 30,
                // loop: true,
                // autoplay: true,
                speed: 3500,
                autoplay: {
                    delay: 2000,
                },
                navigation: {
                    nextEl: ".wea_tabs1_btn .swiper-button-next",
                    prevEl: ".wea_tabs1_btn .swiper-button-prev",
                  },
                breakpoints: {
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      }, 
                    810: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      }, 
                    1100: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },  
                    1400: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                    1800: {
                      slidesPerView: 6,
                      spaceBetween: 20,
                    },
                  },
              });
        },
        climatetab2: function(){
            var swiper = new Swiper(".wea_tabs2", {
                slidesPerView: 7,
                spaceBetween: 30,
                // loop: true,
                // autoplay: true,
                speed: 3500,
                autoplay: {
                    delay: 2000,
                },
                navigation: {
                    nextEl: ".wea_tabs2_btn .swiper-button-next",
                    prevEl: ".wea_tabs2_btn .swiper-button-prev",
                  },
                breakpoints: {
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    450: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                    675: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    900: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                      }, 
                    1140: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    }, 
                    1370: {
                      slidesPerView: 6,
                      spaceBetween: 20,
                    },
                    1600: {
                      slidesPerView: 7,
                      spaceBetween: 20,
                    },
                  },
              });
        },
        wowanimation: function(){
            var wow = new WOW(
                {
                boxClass:     'wow',      // default
                animateClass: 'animated', // default
                offset:       0,          // default
                mobile:       false,       // default
                live:         true,        // default
                scrollContainer: null 
                }
              );
              wow.init();  
        },
    };
    Weather.init();
})(jQuery);

/*-----------------------------------------------------
	Fix Contact Form Submission
-----------------------------------------------------*/
// Contact Form Submission
function checkRequire(formId, targetResp) {
    targetResp.html('');
    var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
    var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
    var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
    var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
    var check = 0;
    $('#er_msg').remove();
    var target = (typeof formId == 'object') ? $(formId) : $('#' + formId);
    target.find('input , textarea , select').each(function() {
        if ($(this).hasClass('require')) {
            if ($(this).val().trim() == '') {
                check = 1;
                $(this).focus();
                $(this).parent('div').addClass('form_error');
                targetResp.html('You missed out some fields.');
                $(this).addClass('error');
                return false;
            } else {
                $(this).removeClass('error');
                $(this).parent('div').removeClass('form_error');
            }
        }
        if ($(this).val().trim() != '') {
            var valid = $(this).attr('data-valid');
            if (typeof valid != 'undefined') {
                if (!eval(valid).test($(this).val().trim())) {
                    $(this).addClass('error');
                    $(this).focus();
                    check = 1;
                    targetResp.html($(this).attr('data-error'));
                    return false;
                } else {
                    $(this).removeClass('error');
                }
            }
        }
    });
    return check;
}
$(".submitForm").on('click', function() {
    var _this = $(this);
    var targetForm = _this.closest('form');
    var errroTarget = targetForm.find('.response');
    var check = checkRequire(targetForm, errroTarget);

    if (check == 0) {
        var formDetail = new FormData(targetForm[0]);
        formDetail.append('form_type', _this.attr('form-type'));
        $.ajax({
            method: 'post',
            url: 'ajaxmail.php',
            data: formDetail,
            cache: false,
            contentType: false,
            processData: false
        }).done(function(resp) {
            console.log(resp);
            if (resp == 1) {
                targetForm.find('input').val('');
                targetForm.find('textarea').val('');
                errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
            } else {
                errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
            }
        });
    }
});

jQuery(function () {
    jQuery("input[name=switchPlan]:radio").click(function () {
        if (jQuery('input[name=switchPlan]:checked').val() == "Light") {
            jQuery("body").removeClass('dark-mode');
            jQuery("body").addClass('light-mode');

        } else if (jQuery('input[name=switchPlan]:checked').val() == "Dark") {
            jQuery("body").removeClass('light-mode');
            jQuery("body").addClass('dark-mode');
        }
    });
});
$( document ).ready(function() {
    var mode = localStorage.getItem('mode');
    if(mode == 'Dark'){
        jQuery("body").removeClass('light-mode');
        jQuery("body").addClass('dark-mode');
        $('#switchDark ').prop("checked", true);
        $('#switchLight').removeAttr('checked');				
    } else {
        jQuery("body").removeClass('dark-mode');
        jQuery("body").addClass('light-mode');
        $('#switchLight ').prop("checked", true);
        $('#switchDark').removeAttr( "checked" );
    }
});

$(document).on('click', '.mode', function (e) {
    var mode =  $(this).val();
    localStorage.setItem('mode', mode);
});
