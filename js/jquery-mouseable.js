/**
 * jQuery mouseable plugin
 * 
 * Custom jQuery method that adds hover and active classes to elements
 * JavaScript replacement for CSS :hover and :active pseudo classes and is !DOCTYPE-agnostic
 * 
 * Copyright (c) 2015 Dan Zervoudakes
 * Released under the MIT license
 */

	(function($){
		$.fn.mouseable = function(_classes){
			
			var hoverClass;
			var activeClass;
			
			if (_classes){
				if (typeof _classes === "object"){
					hoverClass  = (_classes.hasOwnProperty("hoverClass"))  ? _classes["hoverClass"]  : "over";
					activeClass = (_classes.hasOwnProperty("activeClass")) ? _classes["activeClass"] : "down";
				} else {
					throw new Error("Classes parameter for mouseable() must be an object with properties 'hoverClass' and/or 'activeClass'.");
				}
			} else {
				hoverClass = "over";
				activeClass = "down";
			}
			
			var evt_hover  = ("createTouch" in document) ? "touchstart" : "mouseenter";
			var evt_remove = ("createTouch" in document) ? "touchend"   : "mouseleave";
			var evt_down   = ("createTouch" in document) ? "touchstart" : "mousedown";
			var evt_up     = ("createTouch" in document) ? "touchend"   : "mouseup mouseleave";
			
			$(this).on(evt_hover,function(){
				$(this).addClass(hoverClass);
			})
			.on(evt_remove,function(){
				$(this).removeClass(hoverClass);
			})
			.on(evt_down,function(){
				$(this).addClass(activeClass);
			})
			.on(evt_up,function(){
				$(this).removeClass(activeClass);
			});
			
			return this;
		};
	}(jQuery));