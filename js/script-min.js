jQuery(document).ready((function(o){"use strict";o(window).width()<960?o(window).scroll((function(){var e=o(this),s=o(".home #header"),t=o(window).height(),i=o(document).height();e.scrollTop()>t-50?(s.addClass("change-color"),o(".topbar-opening").css("height","0")):e.scrollTop()>i-t?s.removeClass("change-color"):(s.removeClass("change-color"),o(".topbar-opening").css("height","25"))})):o(window).scroll((function(){var e=o(this),s=o(".home #header"),t=o(window).height(),i=o(document).height();e.scrollTop()>t-50&&e.scrollTop()<i-1e3?(s.addClass("change-color"),o(".topbar-opening").css("height","0")):e.scrollTop()>i-t?s.removeClass("change-color"):(s.removeClass("change-color"),o(".topbar-opening").css("height","25"))})),o(window).width()<960||o((function(){o(document).scroll((function(){o(this).scrollTop()>=o("footer").offset().top-50?o("#header").addClass("change-color-footer"):o("#header").removeClass("change-color-footer")}))})),o((function(){o(".accordion-content:not(:first-of-type)").css("display","none"),o(".accordion-title:first-of-type").addClass("open"),o(".js-accordion-title").click((function(){o(".open").not(this).removeClass("open").next().slideUp(300),o(this).toggleClass("open").next().slideToggle(300)}))})),o(".contact-form input").on("keyup",(function(){o(this).parent().addClass("toptop"),o(this).val().length<1&&o(this).parent().removeClass("toptop")})),o(".footer-signup input").on("keyup",(function(){o(this).parent().addClass("show-submit"),o(this).val().length<1&&o(this).parent().removeClass("show-submit")})),o((function(){var e=o(".rooms-slider img").height();o(".rooms-hero").css("min-height",e)})),o(".open-modal").click((function(){o(".modal-box").toggleClass("show"),o(this).next().clone().appendTo(".modal-container"),o("body").toggleClass("no-scroll"),o(".lightbox-slider").slick({speed:1e3,autoplay:!0,autoplaySpeed:3e3,slidesToShow:1,slidesToScroll:1,cssEase:"ease-in-out",responsive:[{breakpoint:600,settings:"unslick"}]})})),o(".close-modal-lightbox").click((function(){o(".modal-container").empty(),o(".modal-box").removeClass("show"),o("body").removeClass("no-scroll"),o(".lightbox-slider").slick("unslick")})),o(".open-menu").click((function(){o("body").addClass("off-menu-active")})),o(".close-menu").click((function(){o("body").removeClass("off-menu-active")})),o(".amenities-button").click((function(){o(this).toggleClass("open"),o(this).next().slideToggle()})),o(".menu-links a").hover((function(){o(".menu-links a").css("opacity","0.5"),o(this).css("opacity","1")})),o(".menu-links a").mouseout((function(){o(".menu-links a").css("opacity","1")})),o(".social a").hover((function(){o(".social a").css("opacity","0.5"),o(this).css("opacity","1")})),o(".social a").mouseout((function(){o(".social a").css("opacity","1")})),o(".home-rooms-slider").slick({speed:1e3,autoplay:!0,autoplaySpeed:3e3,slidesToShow:1,infinite:!0,pauseOnFocus:!0,loop:!0,cssEase:"ease-in-out",centerPadding:"15vw",variableWidth:!0,slidesToScroll:1,arrows:!0}),o(".slider-quote").slick({speed:1e3,autoplay:!0,autoplaySpeed:3e3,slidesToShow:1,slidesToScroll:1,cssEase:"ease-in-out",asNavFor:".slider-quote-footer",arrows:!1}),o(".slider-quote-footer").slick({speed:1e3,autoplay:!0,autoplaySpeed:3e3,slidesToShow:1,slidesToScroll:1,cssEase:"ease-in-out",fade:!0,asNavFor:".slider-quote",arrows:!0}),o(".inst-slider").slick({speed:1e3,autoplay:!0,autoplaySpeed:3e3,centerMode:!0,centerPadding:"5vw",cssEase:"ease-in-out",slidesToShow:3,slidesToScroll:1,arrows:!0,responsive:[{breakpoint:600,settings:{slidesToShow:2}}]}),o(".features-slider").slick({speed:1e3,autoplay:!0,autoplaySpeed:3e3,cssEase:"ease-in-out",slidesToShow:4,slidesToScroll:1,arrows:!0,responsive:[{breakpoint:600,settings:{slidesToShow:1,centerMode:!0,centerPadding:"40px"}}]}),o(".rooms-slider").slick({speed:8e3,autoplay:!0,autoplaySpeed:0,loop:!0,infinite:!0,variableWidth:!0,arrows:!1,cssEase:"linear",slidesToShow:1,pauseOnHover:!1,pauseOnFocus:!1}),o(".rooms-slider").mouseover((function(){o(this).slick("play")})),o(".rooms-hero").hover((function(){o(".rooms-slider").slickPause()}))}));var tooltips=document.querySelectorAll(".js-tooltip-label");window.onmousemove=function(o){for(var e=o.clientX+20+"px",s=o.clientY+20+"px",t=0;t<tooltips.length;t++)tooltips[t].style.top=s,tooltips[t].style.left=e},function(){var o={propertyId:"754508"},e=[],s=document.createElement("script");for(key in o)e.push(key+"="+encodeURIComponent(o[key]));s.type="text/javascript",s.async=!0,s.src="https://www.ada-tray.com/adawidget/?"+btoa(e.join("&")),(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(s)}();