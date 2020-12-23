(function ($) {
    "use strict";

$(document).ready(function(){
	
/*---------------------
   slicknav
--------------------- */	
	$('#mobile-menu').slicknav({	
	allowParentLinks: true
	});
	

/*---------------------
   Circular Bars - Knob
--------------------- */	
	  if(typeof($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
		  var $this = $(this),
			  knobVal = $this.attr('data-rel');
	
		  $this.knob({
			'draw' : function () { 
			  $(this.i).val(this.cv + '%')
			}
		  });
		  
		  $this.appear(function() {
			$({
			  value: 0
			}).animate({
			  value: knobVal
			}, {
			  duration : 2000,
			  easing   : 'swing',
			  step     : function () {
				$this.val(Math.ceil(this.value)).trigger('change');
			  }
			});
		  }, {accX: 0, accY: -150});
		});
	  }	
	
	
/* --------------------------------------------------------
   contact-accordion
* -------------------------------------------------------*/ 
	$(".contact-accordion").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }		
	});	
	
/* --------------------------------------------------------
   question-accordion
* -------------------------------------------------------*/ 
	$(".question-accordion").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }		
	});	
	
/* --------------------------------------------------------
   donate-accordion
* -------------------------------------------------------*/ 
	$(".donate-accordion").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }		
	});
	
	
/*---------------------
    parallax
--------------------- */	
	$('.parallax-area').parallax("50%", 0.3);	
	
/*---------------------
    countdown
--------------------- */
	$('[data-countdown]').each(function() {
	  var $this = $(this), finalDate = $(this).data('countdown');
	  $this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'));
	  });
	});	

/*---------------------
   fancybox
--------------------- */	
	$('.fancybox').fancybox();

 // jQuery counter
    $('.counter').counterUp({
        delay: 50,
        time: 3000
    });	

/*---------------------
   scrollUp
--------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });	
		
}); 

})(jQuery);	


