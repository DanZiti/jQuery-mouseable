/**
 * jQuery mouseable() plugin
 * https://github.com/dzervoudakes/jQuery-mouseable
 * 
 * Custom jQuery method that adds hover and active classes to DOM elements...
 * A !DOCTYPE-agnostic replacement for CSS :hover and :active pseudo classes
 * 
 * Copyright (c) 2015, 2016 Dan Zervoudakes
 * Released under the MIT license
 * https://github.com/dzervoudakes/jQuery-mouseable/blob/master/LICENSE
 */

(function($) {
	
	$.fn.mouseable = function(classes) {
		
		var hoverClass, activeClass;
		
		// Determine default vs. custom classNames
		//
		if (classes) {
			
			if (typeof classes === "object") {
				hoverClass  = (classes.hasOwnProperty("hoverClass"))  ? classes["hoverClass"]  : "over";
				activeClass = (classes.hasOwnProperty("activeClass")) ? classes["activeClass"] : "down";
			}
			
			else {
				throw new Error("Classes parameter for mouseable() must be an object with properties 'hoverClass' and/or 'activeClass'.");
			}
			
		}
		
		else {
			hoverClass  = "over";
			activeClass = "down";
		}
		
		// Create interactions (touch vs. mouse events)
		//
		function createInteraction(touchEvt, mouseEvt) {
			return ("ontouchend" in document) ? touchEvt : mouseEvt;
		};
		
		var events = {
			hover:  createInteraction("touchstart", "mouseenter"),
			remove: createInteraction("touchend", "mouseleave"),
			down:   createInteraction("touchstart", "mousedown"),
			up: 	createInteraction("touchend", "mouseup mouseleave")
		};
		
		$(this)
			.on(events.hover, function() {
				$(this).addClass(hoverClass); // .on([evtHover, evtDown], function() {});
			})
			.on(events.remove, function() {
				$(this).removeClass(hoverClass);
			})
			.on(events.down, function() {
				$(this).addClass(activeClass);
			})
			.on(events.up, function() {
				$(this).removeClass(activeClass);
			});
		
		return this;
	};
	
}(jQuery));