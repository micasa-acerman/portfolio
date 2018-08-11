		$.fn.extend({
			animateCss: function(animationName, callback) {
				var animationEnd = (function(el) {
					var animations = {
						animation: 'animationend',
						OAnimation: 'oAnimationEnd',
						MozAnimation: 'mozAnimationEnd',
						WebkitAnimation: 'webkitAnimationEnd',
					};

					for (var t in animations) {
						if (el.style[t] !== undefined) {
							return animations[t];
						}
					}
				})(document.createElement('div'));

				this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass('animated ' + animationName);

					if (typeof callback === 'function') callback();
				});

				return this;
			},
		});        
		$(document).ready(function() { 
			$('#form-comment').ajaxForm(function() { 
				alert("Thank you for your comment!"); 
			}); 
		}); 

		bind("portfolio");
		bind("certificates");
		bind("comment");
		function bind(id) {
			$("#"+id).hide();
			$("#nav-"+id).click(function(){
				transform('#main','#'+id)
			});
			$("#"+id+" .nav-back").click(function(){
				transform('#'+id,'#main')
			});
		}
		function transform(from,to) {
			$(from).animateCss('fadeOut',function(){
				$(to).show();
				$(to).animateCss('fadeIn');
				$(from).hide();
			});
		}

		(function($) {
			$(function() {
				$('.jcarousel').jcarousel();

				$('.jcarousel-control-prev')
				.on('jcarouselcontrol:active', function() {
					$(this).removeClass('inactive');
				})
				.on('jcarouselcontrol:inactive', function() {
					$(this).addClass('inactive');
				})
				.jcarouselControl({
					target: '-=1'
				});

				$('.jcarousel-control-next')
				.on('jcarouselcontrol:active', function() {
					$(this).removeClass('inactive');
				})
				.on('jcarouselcontrol:inactive', function() {
					$(this).addClass('inactive');
				})
				.jcarouselControl({
					target: '+=1'
				});

				$('.jcarousel-pagination')
				.on('jcarouselpagination:active', 'a', function() {
					$(this).addClass('active');
				})
				.on('jcarouselpagination:inactive', 'a', function() {
					$(this).removeClass('active');
				})
				.jcarouselPagination();
			});
		})(jQuery);