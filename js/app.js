// Apps
$('document').ready(function() {
	'use strict';
	var fxList = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY', 'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'hinge', 'rollIn', 'rollOut', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'],

		$btx = $('#btx'),
		$fx = $('#fx'),
		moving = false,
		numcols = 6,
		widthCol = 100 / numcols,
		txt = '<div class="row clearfix"><div class="col" style="width:' + widthCol + '%"><ul>',
		len = fxList.length,
		linePerCol = Math.ceil(len / numcols),
		lineNum = 0;

	for (var i = 0; i < len; i++) {
		txt += '<li><a href="">' + fxList[i] + '</a></li>';
		lineNum++;
		if (lineNum >= linePerCol) {
			lineNum = 0;
			txt += '</ul></div><div class="col" style="width:' + widthCol + '%"><ul>';
		}
	}
	txt += '</ul></div></div>';

	$fx.html(txt);

	$fx.find('a').click(function(e) {
		e.preventDefault();
		if (!moving) {
			var f = $(this).text();
			$btx.addClass('animated ' + f);
			moving = true;
			$btx.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$btx.removeClass('animated ' + f);
				moving = false;
			});
		}
	});
});