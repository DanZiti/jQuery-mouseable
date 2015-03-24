/**
 * jQuery mouseable() plugin
 * https://github.com/DanZiti/jQuery-mouseable
 * 
 * Custom jQuery method that adds hover and active classes to DOM elements...
 * A !DOCTYPE-agnostic replacement for CSS :hover and :active pseudo classes
 * 
 * Copyright (c) 2015 Dan Zervoudakes
 * Released under the MIT license
 * https://github.com/DanZiti/jQuery-mouseable/blob/master/LICENSE
 */

(function($) {
	
	$.fn.mouseable = function(_classes) {
		
		var hoverClass, activeClass, evt_hover, evt_remove, evt_down, evt_up;
		
		if (_classes) {
			
			if (typeof _classes === "object") {
				hoverClass  = (_classes.hasOwnProperty("hoverClass"))  ? _classes["hoverClass"]  : "over";
				activeClass = (_classes.hasOwnProperty("activeClass")) ? _classes["activeClass"] : "down";
			}
			
			else {
				throw new Error("Classes parameter for mouseable() must be an object with properties 'hoverClass' and/or 'activeClass'.");
			}
			
		}
		
		else {
			hoverClass = "over";
			activeClass = "down";
		}
		
		evt_hover  = ("createTouch" in document) ? "touchstart" : "mouseenter";
		evt_remove = ("createTouch" in document) ? "touchend"   : "mouseleave";
		evt_down   = ("createTouch" in document) ? "touchstart" : "mousedown";
		evt_up     = ("createTouch" in document) ? "touchend"   : "mouseup mouseleave";
		
		$(this)
			.on(evt_hover, function() {
				$(this).addClass(hoverClass);
			})
			.on(evt_remove, function() {
				$(this).removeClass(hoverClass);
			})
			.on(evt_down, function() {
				$(this).addClass(activeClass);
			})
			.on(evt_up, function() {
				$(this).removeClass(activeClass);
			});
		
		return this;
	};
	
}(jQuery));
