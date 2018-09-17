//= require libs/jquery-3.2.1.min
//= require libs/bootstrap.bundle.min
//= require libs/jquery.flexslider-min

(function($){
    return{
        init(){
            this.toggleHeaderDropdown()
            this.initSliders()
        },
        toggleHeaderDropdown(){
            $("header.main-header .has-dropdown").on("click", function(e){
                e.preventDefault()
                if(!$(this).parents('.mobile-nav').length)
                    $(this).parent().find('.dropdown-container').toggleClass('active')
            })

            $(".mobile-nav li.has-dropdown a").on("click", function(e){
                e.preventDefault()
                $(this).parent().find('.dropdown-container').toggleClass('active')
            })

            $(".hamburger").on("click", function(){
                $('.mobile-nav').toggleClass('active')
                $("body > *:not(.main-header)").toggleClass('d-none')
            })
        },
        initSliders(){
            if($(".testimonials-slider").length){
                $('.testimonials-slider').flexslider({
                    animation: "slide",
                    itemWidth: 425,
                    controlNav: false,
                    smoothHeight: false,
                    customDirectionNav: $('.tes-controls a')
                });
            }

            if($(".partners-slider").length){
                $('.partners-slider').flexslider({
                    animation: "slide",
                    itemWidth: 250,
                    controlNav: false,
                    directionNav: false,
                    itemMargin: 70
                });
            }

            if($('.usecases-slider').length){
                $(".usecases-slider .slider").flexslider({
                    animation: "slide",
                    controlNav: true,
                    directionNav: false
                })
            }
        }
    }.init()
})(jQuery)