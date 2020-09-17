/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

	});

})(jQuery);
// Get the modals
var inject = document.getElementById("Injection Mobo");
var oled = document.getElementById("OLED Daughter");
var square = document.getElementById("Square Wave Gen");
var cnc = document.getElementById("CNC Mobo");
var pdb = document.getElementById("Sailbot PDB");
var uv = document.getElementById("UV LED Driver");
var voltage = document.getElementById("Voltage Monitor");

// Get the button that opens the modal
var injectBtn = document.getElementById("injectBtn");
var oledBtn = document.getElementById("daughterBoardBtn");
var squareBtn = document.getElementById("squareWaveBtn");
var cncBtn = document.getElementById("desktopCNCBtn");
var pdbBtn = document.getElementById("pdbBtn");
var uvBtn = document.getElementById("uvBtn");
var voltageBtn = document.getElementById("voltageBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");


// When the user clicks on the button, open the modal
// injectBtn.onclick = function() {
//   inject.style.display = "block";
// }
// oledBtn.onclick = function() {
//   oled.style.display = "block";
// }
// squareBtn.onclick = function() {
//   square.style.display = "block";
// }
// cncBtn.onclick = function() {
//   cnc.style.display = "block";
// }
// pdbBtn.onclick = function() {
//   pdb.style.display = "block";
// }
// uvBtn.onclick = function() {
//   uv.style.display = "block";
// }
// voltageBtn.onclick = function() {
//   voltage.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
  inject.style.display = "none";
}
span[1].onclick = function() {
  oled.style.display = "none";
}
span[2].onclick = function() {
  square.style.display = "none";
}
span[3].onclick = function() {
  cnc.style.display = "none";
}
span[4].onclick = function() {
  pdb.style.display = "none";
}
span[5].onclick = function() {
  uv.style.display = "none";
}
span[6].onclick = function() {
  voltage.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == inject) {
    inject.style.display = "none";
  } else if (event.target == oled){
		oled.style.display = "none";
	} else if (event.target == square){
		square.style.display = "none";
	} else if (event.target == cnc){
		cnc.style.display = "none";
	} else if (event.target == pdb){
		pdb.style.display = "none";
	} else if (event.target == uv){
		uv.style.display = "none";
	} else if (event.target == voltage){
		voltage.style.display = "none";
	}
}
