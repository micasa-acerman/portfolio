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
		init();


		function init(){
			var state = 0;
			$("#portfolio").hide();
			$("#certificates").hide();

			$("#nav-portfolio").click(function(){
				transform('#main','#portfolio')
			});
			$("#portfolio .nav-back").click(function(){
				transform('#portfolio','#main')
			});

			$("#nav-certificates").click(function(){
				transform('#main','#certificates')
			});
		}
		function transform(from,to) {
			$(from).animateCss('fadeOut',function(){
				$(to).show();
				$(to).animateCss('fadeIn');
				$(from).hide();
			});
		}