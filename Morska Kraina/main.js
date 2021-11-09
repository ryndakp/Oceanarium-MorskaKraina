			$(document).ready(function() {
		   	var stickyNavTop = $('.nav').offset().top;
		   	
		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop();
			         debugger;
			    if (scrollTop > stickyNavTop) { 
			        $('.nav').addClass('sticky');
			    } else {
			        $('.nav').removeClass('sticky'); 
			    }
			};
			stickyNav();
			$(window).scroll(function() {
				stickyNav();
			});
		});
		