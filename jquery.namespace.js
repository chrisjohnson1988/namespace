/**
* @description The following is a jQuery plugin which will ease namespacing of 
*	objects which are not part of jQuery.
* @author Christopher Johnson
* @dependancies jQuery
* @usage The following are sample usages of this namespacing functionality in javascript and coffeescript.
*	<code lang="javascript" filename="my/uber/awesome/namespaced/Object.js">
*		(function() {
*			$.namespace("my.uber.awesome.namespaced.Object", {
*				someMethod: function() {
*					return "Hurray, I work";				
*				}
*			});
*		})();
*	</code>
*
*	<code lang="coffeescript" filename="my/uber/awesome/namespaced/Object.coffeescript">
*		do ->
*			$.namespace "my.uber.awesome.namespaced.Object"
*				someMethod: ->	"Hurray. I Work";
*	</code>
*/
(function($, undefined) {
	$.namespace = function(name, entity) {
		var i, packages = name.split('.'), currPackage = window; //split the namespace and store the global context
		for(i=0; i<packages.length-1; i++)
			currPackage = (currPackage[packages[i]] = currPackage[packages[i]] || {}); //define and assign
		currPackage[packages[i]] = entity; //set the entity to the final namespace
	};
})(jQuery);